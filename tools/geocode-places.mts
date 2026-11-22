// One-off data job: the map position of every restaurant the app can suggest, so Gündelik
// mode can sort suggestions by distance from the user.
//
// Run by .github/workflows/geocode-places.yml (or locally: node --experimental-strip-types
// tools/geocode-places.mts). Writes src/data/placeCoords.json:
//   { "<city>|<place name>": [lat, lon, "osm" | "address" | "name"] }
//
// Sources (© OpenStreetMap contributors, ODbL):
//  - places with an OpenStreetMap id: their position from the Overpass API (one request)
//  - other places: OpenStreetMap Nominatim search by address, then by name, at most one
//    request per second as its usage policy asks, with an identifying User-Agent.
// A result further than 60 km from the city centre is thrown away (wrong match), and so is a
// search result that is just the city centre or that several places share (Nominatim's
// fallback to a town or street centre, which would give wrong distances).
// Places already in the file are kept and not looked up again, so a new city only adds its own.
import { readFileSync, writeFileSync } from "node:fs";
import { createServer } from "vite";

const UA = "Kaydirak-app/1.3 (one-off geocoding; https://github.com/mstfgkts5/SweepEat)";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
const { cityPlaces } = await server.ssrLoadModule("/src/data/restaurantMatch.ts");
const { RESTAURANT_CITIES, findProvince, distanceKm } = await server.ssrLoadModule("/src/data/provinces.ts");
const { getVerifiedRestaurant } = await server.ssrLoadModule("/src/data/verifiedRestaurants.ts");

type Coord = [number, number, string];
const out: Record<string, Coord> = (() => {
  try {
    return JSON.parse(readFileSync("src/data/placeCoords.json", "utf8"));
  } catch {
    return {};
  }
})();
const known = new Set(Object.keys(out));
const todo: { key: string; city: string; name: string; address: string; district: string; osm?: string }[] = [];

for (const city of RESTAURANT_CITIES as string[]) {
  for (const p of cityPlaces(city) as { name: string; address: string; district: string }[]) {
    const v = getVerifiedRestaurant(city, p.name);
    if (known.has(`${city}|${p.name}`)) continue;
    todo.push({ key: `${city}|${p.name}`, city, name: p.name, address: p.address, district: p.district, osm: v?.osm });
  }
}
console.log(`${todo.length} places`);

const near = (city: string, lat: number, lon: number) => {
  const c = findProvince(city);
  return c ? distanceKm(lat, lon, c.lat, c.lon) <= 60 : true;
};
const atCentre = (city: string, lat: number, lon: number) => {
  const c = findProvince(city);
  return c ? distanceKm(lat, lon, c.lat, c.lon) < 0.5 : false;
};

// 1) OpenStreetMap ids → positions, in one Overpass request.
const withOsm = todo.filter((t) => t.osm);
const ids = { node: [] as string[], way: [] as string[], relation: [] as string[] };
for (const t of withOsm) {
  const [type, id] = t.osm!.split("/");
  if (type in ids) ids[type as keyof typeof ids].push(id);
}
const parts = Object.entries(ids)
  .filter(([, list]) => list.length)
  .map(([type, list]) => `${type}(id:${list.join(",")});`)
  .join("");
if (parts) {
  const query = `[out:json][timeout:120];(${parts});out center;`;
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded" },
    body: `data=${encodeURIComponent(query)}`
  });
  const data = (await res.json()) as { elements: { type: string; id: number; lat?: number; lon?: number; center?: { lat: number; lon: number } }[] };
  const pos = new Map(data.elements.map((e) => [`${e.type}/${e.id}`, e.center ?? { lat: e.lat!, lon: e.lon! }]));
  for (const t of withOsm) {
    const p = pos.get(t.osm!);
    if (p && near(t.city, p.lat, p.lon)) out[t.key] = [+p.lat.toFixed(6), +p.lon.toFixed(6), "osm"];
  }
  console.log(`overpass: ${Object.keys(out).length}/${withOsm.length}`);
}

// 2) Everything else: Nominatim, by address and then by name.
const search = async (q: string): Promise<{ lat: number; lon: number } | null> => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=tr&q=${encodeURIComponent(q)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    await sleep(1100);
    const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "tr" } });
    if (res.status === 429 || res.status >= 500) {
      await sleep(5000);
      continue;
    }
    const list = (await res.json()) as { lat: string; lon: string }[];
    return list[0] ? { lat: +list[0].lat, lon: +list[0].lon } : null;
  }
  return null;
};

let byAddress = 0;
let byName = 0;
for (const t of todo) {
  if (out[t.key]) continue;
  const tries: [string, string][] = [
    [`${t.address}, ${t.district}, ${t.city}`, "address"],
    [`${t.name}, ${t.district}, ${t.city}`, "name"]
  ];
  for (const [q, how] of tries) {
    const r = await search(q);
    if (r && near(t.city, r.lat, r.lon) && !atCentre(t.city, r.lat, r.lon)) {
      out[t.key] = [+r.lat.toFixed(6), +r.lon.toFixed(6), how];
      if (how === "address") byAddress++;
      else byName++;
      break;
    }
  }
}
console.log(`nominatim: ${byAddress} by address, ${byName} by name`);

// Search results that several places share are a street or district centre: drop them.
const spot = (c: Coord) => `${c[0].toFixed(4)},${c[1].toFixed(4)}`;
const shared = new Map<string, number>();
for (const c of Object.values(out)) shared.set(spot(c), (shared.get(spot(c)) ?? 0) + 1);
for (const [k, c] of Object.entries(out)) if (c[2] !== "osm" && (shared.get(spot(c)) ?? 0) > 1) delete out[k];
console.log(`total: ${Object.keys(out).length}/${todo.length}`);

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b, "tr")));
writeFileSync("src/data/placeCoords.json", JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"') + "\n");
await server.close();
