// No prices on screen (20 Nov 2026): every insight text, in every mode, is free of amounts.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

test("no insight text shows a price", async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    const food = await server.ssrLoadModule("/src/data/allFood.ts");
    const eco = await server.ssrLoadModule("/src/data/sustainability.ts");
    const modes = ["everyday", "fit", "vegan", "tourist", "zero_waste"];
    const bad: string[] = [];
    for (const item of food.allFoodItems) {
      for (const mode of modes) {
        for (const lang of ["tr", "en"]) {
          const text: string = eco.getPersonaInsight(item, mode, lang);
          if (/₺|\d\s?TL\b/.test(text) || text.length < 10) bad.push(`${item.nameTr} / ${mode} / ${lang}: ${text}`);
        }
      }
    }
    assert.deepEqual(bad, []);
  } finally {
    await server.close();
  }
});

test("stripPrices keeps the sentence readable", async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    const { stripPrices } = await server.ssrLoadModule("/src/data/noPrice.ts");
    assert.equal(stripPrices("130 ₺ fiyatıyla öğrenci dostu, en doyurucu sokak lezzeti."), "Öğrenci dostu, en doyurucu sokak lezzeti.");
    assert.equal(stripPrices("Only ₺95.00! The most affordable egg meal."), "The most affordable egg meal.");
    assert.equal(stripPrices("Great protein value for ₺155.00, keeping you full."), "Great protein value keeping you full.");
    assert.equal(stripPrices("Fiyat yazmayan bir cümle."), "Fiyat yazmayan bir cümle.");
  } finally {
    await server.close();
  }
});
