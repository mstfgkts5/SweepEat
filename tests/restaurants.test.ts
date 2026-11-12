// Checks the restaurant suggestions for every dish in every city of the app.
// Run with: npm test   (loads the app modules through Vite, no extra packages)
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import type { ViteDevServer } from "vite";

const CITIES = ["İstanbul", "Ankara", "İzmir", "Mersin", "Gaziantep", "Eskişehir", "Adana", "Diyarbakır", "Kahramanmaraş"];

let server: ViteDevServer;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let food: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let match: any;

before(async () => {
  server = await createServer({ configFile: "./vite.config.ts", server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
  food = await server.ssrLoadModule("/src/data/allFood.ts");
  match = await server.ssrLoadModule("/src/data/restaurantMatch.ts");
});

after(async () => {
  await server.close();
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const queryOf = (item: any) => ({
  key: food.dishKeyOf(item),
  names: food.restaurantLookupNames(item),
  nameEn: item.nameEn,
  dishType: item.dishType,
  category: item.category
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findDish = (key: string) => food.allFoodItems.find((i: any) => food.dishKeyOf(i) === key);

test("every dish gets 5 different real places with an address in every city", () => {
  const missing: string[] = [];
  for (const city of CITIES) {
    for (const item of food.allFoodItems) {
      const list = match.generateTopRestaurants(queryOf(item), city, "tr");
      const names = new Set(list.map((r: { name: string }) => r.name));
      if (list.length !== 5 || names.size !== 5) missing.push(`${city} / ${item.nameTr}: ${list.length}`);
      for (const r of list) {
        assert.ok(r.address && r.address.length > 3, `${city} / ${r.name} has no address`);
        assert.ok(["dish", "kind", "general"].includes(r.match));
      }
    }
  }
  assert.deepEqual(missing, []);
});

test("places known for the dish come before the others", () => {
  for (const city of CITIES) {
    for (const item of food.allFoodItems) {
      const levels = match.suggestPlaces(queryOf(item), city).map((s: { match: string }) => s.match);
      const rank = { dish: 0, kind: 1, general: 2 } as Record<string, number>;
      for (let i = 1; i < levels.length; i++) assert.ok(rank[levels[i - 1]] <= rank[levels[i]], `${city} / ${item.nameTr}: ${levels}`);
    }
  }
});

test("renamed dishes still find their curated places (Gaziantep katmer)", () => {
  const katmer = findDish("katmer");
  assert.ok(katmer, "katmer is on the menu");
  const list = match.generateTopRestaurants(queryOf(katmer), "Gaziantep", "tr");
  assert.equal(list[0].match, "dish");
  assert.ok(list.some((r: { name: string }) => /katmer/i.test(r.name)), list.map((r: { name: string }) => r.name).join(", "));
});

test("well-known local matches", () => {
  const cases: [string, string, RegExp][] = [
    ["kaburga-dolmasi", "Diyarbakır", /Selim Amca|Beroş|Kemikli|Hancı/],
    ["maras-dondurmasi", "Kahramanmaraş", /Yaşar|Gaymak/],
    ["balik-ekmek", "İstanbul", /Balık|Aterina|Sabahattin/],
    ["tantuni", "Mersin", /Tantuni/],
    ["kokorec", "Eskişehir", /Kokoreç/],
    ["boyoz", "İzmir", /Dostlar Fırını|Gevrek/]
  ];
  for (const [key, city, re] of cases) {
    const item = findDish(key);
    assert.ok(item, `${key} is on the menu`);
    const list = match.generateTopRestaurants(queryOf(item), city, "tr");
    assert.equal(list[0].match, "dish", `${key} in ${city}: ${list[0].name}`);
    assert.match(list[0].name, re, `${key} in ${city}: ${list.map((r: { name: string }) => r.name).join(", ")}`);
  }
});

test("a fish dish never gets a sweet shop, a dessert never gets a kebab house as a fitting place", () => {
  const levrek = findDish("izgara-levrek");
  const baklava = findDish("baklava");
  for (const city of CITIES) {
    for (const s of match.suggestPlaces(queryOf(levrek), city)) {
      if (s.match !== "general") assert.ok(s.place.kinds.has("balik") || s.place.kinds.has("meze"), `${city} levrek: ${s.place.name}`);
    }
    for (const s of match.suggestPlaces(queryOf(baklava), city)) {
      if (s.match !== "general") assert.ok(s.place.kinds.has("tatli") || s.place.kinds.has("kahvalti"), `${city} baklava: ${s.place.name}`);
    }
  }
});

test("a province without restaurant data uses the nearest city that has it", async () => {
  const prov = await server.ssrLoadModule("/src/data/provinces.ts");
  assert.equal(prov.restaurantCityFor("Gaziantep"), "Gaziantep");
  assert.equal(prov.restaurantCityFor("Kilis"), "Gaziantep");
  assert.equal(prov.restaurantCityFor("Batman"), "Diyarbakır");
  assert.equal(prov.restaurantCityFor("Osmaniye"), "Adana");
  assert.equal(prov.restaurantCityFor("Kocaeli"), "İstanbul");
  assert.equal(prov.restaurantCityFor("Manisa"), "İzmir");
  assert.equal(prov.restaurantCityFor("Kırıkkale"), "Ankara");
});
