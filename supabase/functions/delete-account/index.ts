// Deletes the signed-in user's Kaydırak account for good.
// The caller is identified only by their own session token; the service-role key never
// leaves the server. Deleting the auth user also deletes public.user_state (on delete cascade).
// Plain fetch calls to Supabase Auth, no npm packages.
// Deployed to the Supabase project "Kaydirak" with JWT verification on.

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!token) return json({ error: "no_session" }, 401);

  const url = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // Who is calling? Ask Auth with the caller's own token.
  const who = await fetch(`${url}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: serviceKey }
  });
  if (!who.ok) return json({ error: "invalid_session" }, 401);
  const user = await who.json();
  if (!user?.id) return json({ error: "invalid_session" }, 401);

  // Delete exactly that user.
  const del = await fetch(`${url}/auth/v1/admin/users/${encodeURIComponent(user.id)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey }
  });
  if (!del.ok) {
    console.error("delete user failed", del.status, await del.text());
    return json({ error: "delete_failed" }, 500);
  }
  return json({ deleted: true });
});
