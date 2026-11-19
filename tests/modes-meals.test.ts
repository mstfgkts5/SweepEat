import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return {
      meals: (await server.ssrLoadModule("/src/data/meals.ts")) as typeof import("../src/data/meals"),
      lists: (await server.ssrLoadModule("/src/data/modeLists.ts")) as typeof import("../src/data/modeLists"),
      food: (await server.ssrLoadModule("/src/data/mockFood.ts")) as typeof import("../src/data/mockFood"),
      all: (await server.ssrLoadModule("/src/data/allFood.ts")) as typeof import("../src/data/allFood")
    };
  } finally {
    await server.close();
  }
};

test("Gündelik merges the former Ekonomik, Cheat Day and Gurme lists, taking turns, each dish once", async () => {
  const { lists } = await load();
  const everyday = lists.MODE_LISTS.everyday;
  assert.equal(new Set(everyday).size, everyday.length, "no duplicates");
  assert.deepEqual(everyday.slice(0, 3), ["tavuk-doner-durum-eco", "hamburger", "cag-kebabi"], "economic, cheat, gourmet in turns");
  assert.ok(everyday.length > 100);
  assert.deepEqual(Object.keys(lists.MODE_LISTS).sort(), ["everyday", "fit", "tourist", "vegan"]);
});

test("old saved modes become Gündelik", async () => {
  const { food } = await load();
  for (const old of ["cheat_day", "economic", "gourmet"]) assert.equal(food.normalizePersona(old), "everyday");
  assert.equal(food.normalizePersona("fit"), "fit");
  assert.equal(food.normalizePersona("nonsense"), null);
});

test("every Gündelik dish has an AI comment from the list it came from", async () => {
  const { all } = await load();
  const everyday = all.allFoodItems.filter((x) => x.modes.includes("everyday"));
  for (const item of everyday) {
    const text = item.aiInsights.tr[all.everydaySourceOf(item)];
    assert.ok(text && text.length > 5, `${item.nameTr} has a comment`);
  }
});

test("meals: breakfast dishes, breakfast-only dishes and the clock default", async () => {
  const { meals } = await load();
  assert.deepEqual(meals.mealsForKey("menemen"), ["breakfast", "lunch"], "menemen: not a dinner");
  assert.deepEqual(meals.mealsForKey("serpme-kahvalti"), ["breakfast"]);
  assert.deepEqual(meals.mealsForKey("iskender"), ["lunch", "dinner"]);
  assert.deepEqual(meals.mealsForKey("mercimek-corbasi-vegan"), ["breakfast", "lunch", "dinner"]);
  assert.equal(meals.mealForHour(8), "breakfast");
  assert.equal(meals.mealForHour(13), "lunch");
  assert.equal(meals.mealForHour(20), "dinner");
  assert.equal(meals.mealForHour(2), "dinner");
});

test("every mode has dishes for every meal", async () => {
  const { meals, all } = await load();
  for (const mode of ["everyday", "fit", "vegan", "tourist"] as const) {
    const mains = all.allFoodItems.filter((x) => x.modes.includes(mode) && !all.isDessert(x));
    for (const meal of meals.MEALS) {
      assert.ok(meals.filterByMeal(mains, meal).length >= 4, `${mode} / ${meal}`);
    }
  }
});
