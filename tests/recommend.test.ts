// Unit tests for the recommendation algorithm (src/data/recommend.ts).
// Run with: npm test   (uses Node's built-in test runner, no extra packages)
import { test } from "node:test";
import assert from "node:assert/strict";
import { recommend, pushRecent, rankTypes, RECENT_LIMIT } from "../src/data/recommend.ts";
import type { Recommendable } from "../src/data/recommend.ts";
import type { DishType } from "../src/data/dishTypes.ts";

// A small menu in popularity order: 8 meat, 8 chicken, 4 fish, 4 vegetable, 4 dessert.
const make = (type: DishType, n: number): Recommendable[] =>
  Array.from({ length: n }, (_, i) => ({ id: `${type}-${i + 1}`, dishType: type }));
const POOL: Recommendable[] = [
  ...make("et", 8), ...make("tavuk", 8), ...make("balik", 4), ...make("sebze", 4), ...make("tatli", 4)
].sort((a, b) => Number(a.id.split("-")[1]) - Number(b.id.split("-")[1])); // interleave types

const typesOf = (items: Recommendable[]) => items.map((x) => x.dishType);
const countOf = (items: Recommendable[], type: DishType) => items.filter((x) => x.dishType === type).length;

test("with no selections, returns the most popular dishes in pool order", () => {
  const result = recommend(POOL, [], 6);
  assert.deepEqual(result.map((x) => x.id), POOL.slice(0, 6).map((x) => x.id));
});

test("unknown ids in the history behave like no history", () => {
  const result = recommend(POOL, ["does-not-exist"], 4);
  assert.deepEqual(result.map((x) => x.id), POOL.slice(0, 4).map((x) => x.id));
});

test("most chosen type gets most of the list, ~20% comes from other types", () => {
  const recent = ["et-1", "et-2", "et-3", "et-4", "et-5"];
  const result = recommend(POOL, recent, 10);
  assert.equal(result.length, 10);
  assert.equal(countOf(result, "et"), 3); // only 3 meat dishes are left that were not picked
  // 8 favourite slots, but only 3 fresh meat dishes -> the rest is filled; variety is 2 of other types
  const others = result.filter((x) => x.dishType !== "et");
  assert.ok(others.length >= 2);
});

test("80/20 split when there are enough dishes of the favourite type", () => {
  const recent = ["tavuk-1", "tavuk-2", "tavuk-3", "tavuk-4", "tavuk-5"];
  const bigPool = [...make("tavuk", 20), ...make("et", 10), ...make("balik", 10)];
  const result = recommend(bigPool, recent, 10);
  assert.equal(countOf(result, "tavuk"), 8);
  assert.equal(result.length - countOf(result, "tavuk"), 2);
  // the two variety dishes are of two different types
  assert.deepEqual(new Set(result.filter((x) => x.dishType !== "tavuk").map((x) => x.dishType)), new Set(["et", "balik"]));
});

test("slots are shared in proportion to how often each type was picked", () => {
  const recent = ["et-1", "et-2", "et-3", "tavuk-1", "tavuk-2"];
  const bigPool = [...make("et", 20), ...make("tavuk", 20), ...make("balik", 10), ...make("sebze", 10)];
  const result = recommend(bigPool, recent, 10);
  // 8 favourite slots: 3/5 meat -> 4.8 -> 5, 2/5 chicken -> 3.2 -> 3
  assert.equal(countOf(result, "et"), 5);
  assert.equal(countOf(result, "tavuk"), 3);
  assert.equal(countOf(result, "balik") + countOf(result, "sebze"), 2);
  assert.equal(result[0].dishType, "et"); // most chosen type first
});

test("dishes already in the last 5 selections are not at the top", () => {
  const recent = ["et-1", "et-2", "tavuk-1"];
  const result = recommend(POOL, recent, 10);
  const top = result.slice(0, 5).map((x) => x.id);
  for (const id of recent) assert.ok(!top.includes(id), `${id} should not be at the top`);
  assert.ok(result.every((x) => !recent.includes(x.id)), "enough fresh dishes -> picked ones not shown at all");
});

test("picked dishes are only used at the end when nothing else is left", () => {
  const tiny: Recommendable[] = [{ id: "a", dishType: "et" }, { id: "b", dishType: "et" }, { id: "c", dishType: "tavuk" }];
  const result = recommend(tiny, ["a"], 3);
  assert.deepEqual(result.map((x) => x.id), ["b", "c", "a"]);
});

test("works with fewer than 5 selections (one selection)", () => {
  const result = recommend(POOL, ["balik-1"], 5);
  assert.equal(result.length, 5);
  assert.equal(result[0].dishType, "balik");
  assert.ok(!result.some((x) => x.id === "balik-1"));
  assert.ok(typesOf(result).some((t) => t !== "balik"), "still has variety");
});

test("never returns duplicates and respects count", () => {
  const result = recommend(POOL, ["et-1", "tavuk-1", "sebze-1", "tatli-1", "balik-1"], 12);
  assert.equal(result.length, 12);
  assert.equal(new Set(result.map((x) => x.id)).size, 12);
  assert.deepEqual(recommend(POOL, ["et-1"], 0), []);
  assert.deepEqual(recommend([], ["et-1"], 5), []);
});

test("only the last 5 selections count", () => {
  // 3 old fish picks, then 5 chicken picks: fish must not influence the result
  const recent = ["balik-1", "balik-2", "balik-3", "tavuk-1", "tavuk-2", "tavuk-3", "tavuk-4", "tavuk-5"];
  assert.deepEqual(rankTypes(recent.slice(-RECENT_LIMIT).map((id) => POOL.find((x) => x.id === id)!)), ["tavuk"]);
  const result = recommend(POOL, recent, 5);
  assert.equal(result[0].dishType, "tavuk");
});

test("rankTypes: ties go to the more recently picked type", () => {
  const items = [{ id: "1", dishType: "et" as const }, { id: "2", dishType: "tavuk" as const }];
  assert.deepEqual(rankTypes(items), ["tavuk", "et"]);
});

test("pushRecent keeps the newest 5 without duplicates", () => {
  let recent: string[] = [];
  for (const id of ["a", "b", "c", "d", "e", "f"]) recent = pushRecent(recent, id);
  assert.deepEqual(recent, ["b", "c", "d", "e", "f"]);
  assert.deepEqual(pushRecent(recent, "c"), ["b", "d", "e", "f", "c"]);
});
