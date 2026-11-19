import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return (await server.ssrLoadModule("/src/group/group.ts")) as typeof import("../src/group/group");
  } finally {
    await server.close();
  }
};

test("table codes are cleaned up as they are typed", async () => {
  const { normalizeCode, isValidCode } = await load();
  assert.equal(normalizeCode("abc 23-4x"), "ABC234");
  assert.equal(normalizeCode("ğkm7pq"), "KM7PQ", "letters that are not in codes are dropped");
  assert.equal(isValidCode("K7P2QX"), true);
  assert.equal(isValidCode("K7P2Q"), false, "too short");
  assert.equal(isValidCode("O1P2QX"), false, "O and 1 are never used in codes");
});

test("a new table gets 12 different dishes from the top of the mode's list", async () => {
  const { pickGroupDishes } = await load();
  const pool = Array.from({ length: 40 }, (_, i) => ({ id: `d${i}` }));
  const picked = pickGroupDishes(pool, 12, () => 0.42);
  assert.equal(picked.length, 12);
  assert.equal(new Set(picked.map((d) => d.id)).size, 12);
  assert.ok(picked.every((d) => Number(d.id.slice(1)) < 24), "only from the top 24");
  assert.equal(pickGroupDishes(pool.slice(0, 5), 12).length, 5, "small pools give what they have");
});

test("the winners are the dishes tied for the most likes", async () => {
  const { groupWinners } = await load();
  assert.deepEqual(groupWinners([{ dish_id: "a", likes: 3 }, { dish_id: "b", likes: 3 }, { dish_id: "c", likes: 1 }]), ["a", "b"]);
  assert.deepEqual(groupWinners([{ dish_id: "a", likes: 0 }]), [], "no likes, no winner");
  assert.deepEqual(groupWinners([]), []);
});
