import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return {
      match: (await server.ssrLoadModule("/src/data/restaurantMatch.ts")) as typeof import("../src/data/restaurantMatch"),
      all: (await server.ssrLoadModule("/src/data/allFood.ts")) as typeof import("../src/data/allFood")
    };
  } finally {
    await server.close();
  }
};

const query = (all: Awaited<ReturnType<typeof load>>["all"], key: string) => {
  const item = all.allFoodItems.find((x) => all.dishKeyOf(x) === key)!;
  return { key, names: all.restaurantLookupNames(item), nameEn: item.nameEn, dishType: item.dishType, category: item.category };
};

test("Gündelik: places near the user come closest first, inside a small circle", async () => {
  const { match, all } = await load();
  const kadikoy = { lat: 40.9909, lon: 29.0303 };
  const near = match.suggestNearby(query(all, "iskender"), "İstanbul", kadikoy);
  assert.ok(near.length > 0, "some places with a known position");
  for (let i = 1; i < near.length; i++) assert.ok(near[i - 1].distanceKm <= near[i].distanceKm, "closest first");
  assert.ok(near.every((s) => s.match !== "general"), "only places that serve the dish or this kind of food");
  assert.ok(near[near.length - 1].distanceKm <= match.NEAR_RADII_KM[match.NEAR_RADII_KM.length - 1]);
});

test("the restaurant list shows distances only when the position is known", async () => {
  const { match, all } = await load();
  const q = query(all, "lahmacun");
  const withPos = match.generateTopRestaurants(q, "İstanbul", "tr", { lat: 41.0369, lon: 28.985 });
  const without = match.generateTopRestaurants(q, "İstanbul", "tr", null);
  assert.ok(withPos.some((r) => r.distanceKm !== undefined));
  assert.ok(without.every((r) => r.distanceKm === undefined));
  assert.equal(without.length, 5);
});

test("place positions are inside their city and not just the city centre", async () => {
  const { match } = await load();
  const coords = (await import("../src/data/placeCoords.json", { with: { type: "json" } })).default as Record<string, [number, number, string]>;
  assert.ok(Object.keys(coords).length > 150);
  for (const [key, [lat, lon]] of Object.entries(coords)) {
    const [city, name] = key.split("|");
    assert.deepEqual(match.placePosition(city, name), { lat, lon });
  }
});
