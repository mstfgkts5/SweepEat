import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

// ads.ts imports @capacitor/core, so load it through Vite like the other app modules.
const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return (await server.ssrLoadModule("/src/ads/ads.ts")) as typeof import("../src/ads/ads");
  } finally {
    await server.close();
  }
};

test("an ad card is due only after AD_EVERY swiped dishes", async () => {
  const { adDue, AD_EVERY } = await load();
  assert.equal(adDue(0), false);
  assert.equal(adDue(AD_EVERY - 1), false);
  assert.equal(adDue(AD_EVERY), true);
  assert.equal(adDue(AD_EVERY + 3), true);
  assert.equal(adDue(5, 0), false, "AD_EVERY 0 turns ad cards off");
});

test("no ads outside the Android/iOS app (web version, tests)", async () => {
  const { adsSupported, prepareAds } = await load();
  assert.equal(adsSupported(), false);
  assert.equal(await prepareAds(), false);
});
