import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return (await server.ssrLoadModule("/src/plus/plus.ts")) as typeof import("../src/plus/plus");
  } finally {
    await server.close();
  }
};

test("an owned Kaydırak Plus subscription is recognised", async () => {
  const { hasActivePlus, PLUS_PRODUCT_ID } = await load();
  assert.equal(hasActivePlus([]), false);
  assert.equal(hasActivePlus([{ productIdentifier: PLUS_PRODUCT_ID, purchaseState: "1" }]), true, "Android: purchased");
  assert.equal(hasActivePlus([{ productIdentifier: PLUS_PRODUCT_ID, purchaseState: "2" }]), false, "Android: pending payment");
  assert.equal(hasActivePlus([{ productIdentifier: PLUS_PRODUCT_ID, isActive: true }]), true, "iOS: active");
  assert.equal(hasActivePlus([{ productIdentifier: PLUS_PRODUCT_ID, purchaseState: "1", subscriptionState: "expired" }]), false);
  assert.equal(hasActivePlus([{ productIdentifier: "baska_urun", purchaseState: "1" }]), false);
});

test("no Plus purchase outside the Android app", async () => {
  const { plusSupported, checkPlus } = await load();
  assert.equal(plusSupported(), false);
  assert.equal(await checkPlus(), false);
});
