// Fixes from the 100 fake-customer test (20 Nov 2026): city coverage and group invite links.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    const group = (await server.ssrLoadModule("/src/group/group.ts")) as typeof import("../src/group/group");
    const provinces = (await server.ssrLoadModule("/src/data/provinces.ts")) as typeof import("../src/data/provinces");
    return { group, provinces };
  } finally {
    await server.close();
  }
};

test("cities with and without our own restaurant list", async () => {
  const { provinces } = await load();
  assert.equal(provinces.hasRestaurantData("İzmir"), true);
  assert.equal(provinces.hasRestaurantData("izmir"), true);
  assert.equal(provinces.hasRestaurantData("Bursa"), true);
  assert.equal(provinces.hasRestaurantData("Trabzon"), true);
  assert.equal(provinces.hasRestaurantData("Van"), false);
  assert.equal(provinces.hasRestaurantData("Balıkesir"), false);
  // Van still falls back to a covered city for the "nearest city" list.
  assert.equal(provinces.hasRestaurantData(provinces.restaurantCityFor("Van")), true);
});

test("invite links carry the table code", async () => {
  const { group } = await load();
  assert.equal(group.inviteLink("ABC234", "https://x.test/app/"), "https://x.test/app/?masa=ABC234");
  assert.equal(group.inviteLink("ABC234", "https://x.test/?a=1"), "https://x.test/?a=1&masa=ABC234");
  assert.equal(group.readInviteCode("?masa=ABC234"), "ABC234");
  assert.equal(group.readInviteCode("?x=1&masa=abc234"), "ABC234");
  assert.equal(group.readInviteCode("?masa=ABC"), null);
  assert.equal(group.readInviteCode("?masa=OOOOOO"), null);
  assert.equal(group.readInviteCode(""), null);
});
