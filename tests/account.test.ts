import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";

const load = async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    return (await server.ssrLoadModule("/src/account/account.ts")) as typeof import("../src/account/account");
  } finally {
    await server.close();
  }
};

test("recent picks from the account and this phone are merged, newest last, no duplicates", async () => {
  const { mergeRecent } = await load();
  assert.deepEqual(mergeRecent(["a", "b"], ["c"], 5), ["a", "b", "c"]);
  assert.deepEqual(mergeRecent(["a", "b", "c"], ["b"], 5), ["a", "c", "b"], "a pick made again moves to the end");
  assert.deepEqual(mergeRecent(["a", "b", "c", "d"], ["e", "f"], 5), ["b", "c", "d", "e", "f"], "keeps the newest 5");
  assert.deepEqual(mergeRecent([], [], 5), []);
});

test("sign-in errors become short, actionable Turkish messages", async () => {
  const { authErrorText } = await load();
  assert.match(authErrorText({ code: "invalid_credentials" }, "tr"), /şifre hatalı/);
  assert.match(authErrorText({ code: "email_not_confirmed" }, "tr"), /onay bağlantısına/);
  assert.match(authErrorText({ code: "user_already_exists" }, "tr"), /zaten bir hesap/);
  assert.match(authErrorText({ code: "weak_password" }, "tr"), /en az 8/);
  assert.match(authErrorText({ code: "over_request_rate_limit" }, "tr"), /Çok fazla deneme/);
  assert.match(authErrorText({ message: "Failed to fetch" }, "tr"), /İnternet/);
  assert.match(authErrorText(new Error("???"), "en"), /went wrong/);
});

test("the Google button stays hidden until a Google client ID is set", async () => {
  const { googleEnabled, GOOGLE_WEB_CLIENT_ID } = await load();
  assert.equal(googleEnabled(), GOOGLE_WEB_CLIENT_ID !== "");
});
