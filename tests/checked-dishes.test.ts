import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return {
      match: (await server.ssrLoadModule("/src/data/restaurantMatch.ts")) as typeof import("../src/data/restaurantMatch"),
      checked: (await server.ssrLoadModule("/src/data/checkedDishes.ts")) as typeof import("../src/data/checkedDishes")
    };
  } finally {
    await server.close();
  }
};

test("every checked restaurant–dish pair has a source", async () => {
  const { checked } = await load();
  assert.ok(checked.CHECKED_DISHES.length > 0);
  for (const c of checked.CHECKED_DISHES) assert.ok(c.source.length > 0, `${c.city} ${c.place}: ${c.dish}`);
});

test("a checked pair counts for its dish, an unchecked one does not", async () => {
  const { checked } = await load();
  assert.ok(checked.isDishChecked("İstanbul", "Sabırtaşı Restoran", "İçli Köfte"));
  assert.ok(checked.isDishChecked("istanbul", "sabirtasi restoran", "icli kofte"), "spelling-insensitive");
  assert.ok(!checked.isDishChecked("İstanbul", "Sabırtaşı Restoran", "Perde Pilavı"));
});

test("a place shown as permanently closed is never suggested", async () => {
  const { match } = await load();
  assert.ok(!match.cityPlaces("İstanbul").some((p) => p.name === "Gezi İstanbul"));
});

test("a dish that the place's full menu does not have is not suggested there", async () => {
  const { match, checked } = await load();
  assert.ok(checked.REFUTED_DISHES.length > 0);
  for (const c of checked.REFUTED_DISHES) assert.ok(c.source.startsWith("http"), `${c.place}: ${c.dish}`);
  const saray = match.cityPlaces("İstanbul").find((p) => p.name === "Saray Muhallebicisi");
  assert.ok(!saray || !saray.text.includes("kabak sandal"), "Saray Muhallebicisi no longer listed for kabak sandal");
});
