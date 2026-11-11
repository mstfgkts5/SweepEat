// ==========================================
// "SANA ÖZEL ÖNERİLER" — recommendation algorithm
//
// Pure functions only (no React, no localStorage), so they can be unit tested
// with `npm test` (see tests/recommend.test.ts).
//
// How it works:
//  1. Look at the user's last selections (at most 5) and count their dish types
//     (et, tavuk, balık, ...).
//  2. ~80% of the suggestions come from the types the user picked, shared out in
//     proportion to how often each type was picked (the most picked type gets most).
//  3. ~20% come from other types, so the user still discovers something new.
//  4. Dishes already in the last selections are never put at the top; they are
//     only used at the very end if there is nothing else to show.
//  5. With no selections yet, the list is simply the most popular dishes
//     (the order of the pool given in, which is the mode's popularity order).
// Inside every type, dishes keep the pool's order (most popular first), so the
// result is deterministic.
// ==========================================
import type { DishType } from "./dishTypes";

export const RECENT_LIMIT = 5;
export const VARIETY_SHARE = 0.2;

export interface Recommendable {
  id: string;
  dishType?: DishType;
}

// Add a selection to the history: newest last, no duplicates, at most `limit` entries.
export const pushRecent = (recent: string[], id: string, limit: number = RECENT_LIMIT): string[] =>
  [...recent.filter((x) => x !== id), id].slice(-limit);

// How many times each type appears in the recent selections.
export const countTypes = <T extends Recommendable>(recentItems: T[]): Map<DishType, number> => {
  const counts = new Map<DishType, number>();
  for (const item of recentItems) {
    if (!item.dishType) continue;
    counts.set(item.dishType, (counts.get(item.dishType) ?? 0) + 1);
  }
  return counts;
};

// Types ordered by count (high to low); on a tie, the more recently picked type first.
export const rankTypes = <T extends Recommendable>(recentItems: T[]): DishType[] => {
  const counts = countTypes(recentItems);
  const lastSeen = new Map<DishType, number>();
  recentItems.forEach((item, i) => {
    if (item.dishType) lastSeen.set(item.dishType, i);
  });
  return [...counts.keys()].sort(
    (a, b) => (counts.get(b)! - counts.get(a)!) || (lastSeen.get(b)! - lastSeen.get(a)!)
  );
};

// Split `slots` between types in proportion to their counts (largest remainder method).
const shareSlots = (slots: number, ranked: DishType[], counts: Map<DishType, number>): Map<DishType, number> => {
  const total = ranked.reduce((sum, type) => sum + counts.get(type)!, 0);
  const share = new Map<DishType, number>();
  const remainders: { type: DishType; rest: number }[] = [];
  let given = 0;
  for (const type of ranked) {
    const exact = (slots * counts.get(type)!) / total;
    share.set(type, Math.floor(exact));
    given += Math.floor(exact);
    remainders.push({ type, rest: exact - Math.floor(exact) });
  }
  // Stable sort keeps the ranked order on equal remainders (most picked type wins).
  remainders.sort((a, b) => b.rest - a.rest);
  for (let i = 0; given < slots && i < remainders.length; i++, given++) {
    share.set(remainders[i].type, share.get(remainders[i].type)! + 1);
  }
  return share;
};

/**
 * Personal recommendations.
 * @param pool      candidate dishes, most popular first
 * @param recentIds ids of the user's last selections, newest last
 * @param count     how many suggestions to return
 */
export const recommend = <T extends Recommendable>(pool: T[], recentIds: string[], count: number = 10): T[] => {
  if (count <= 0 || pool.length === 0) return [];
  const recent = recentIds.slice(-RECENT_LIMIT);
  const recentSet = new Set(recent);
  const byId = new Map(pool.map((item) => [item.id, item]));
  const recentItems = recent.map((id) => byId.get(id)).filter((x): x is T => x !== undefined);

  const fresh = pool.filter((item) => !recentSet.has(item.id));
  const alreadyPicked = pool.filter((item) => recentSet.has(item.id));

  const ranked = rankTypes(recentItems);
  // No (known) selections yet: most popular dishes.
  if (ranked.length === 0) return [...fresh, ...alreadyPicked].slice(0, count);

  const counts = countTypes(recentItems);
  const favTypes = new Set(ranked);
  const varietySlots = Math.round(count * VARIETY_SHARE);
  const share = shareSlots(count - varietySlots, ranked, counts);

  const used = new Set<string>();
  const take = (items: T[], n: number): T[] => {
    const out: T[] = [];
    for (const item of items) {
      if (out.length >= n) break;
      if (used.has(item.id)) continue;
      used.add(item.id);
      out.push(item);
    }
    return out;
  };

  // Favourite types, interleaved (most picked type first in every round).
  const perType = new Map(ranked.map((type) => [type, take(fresh.filter((x) => x.dishType === type), share.get(type)!)]));
  const favourites: T[] = [];
  for (let round = 0; favourites.length < count - varietySlots; round++) {
    let added = false;
    for (const type of ranked) {
      const item = perType.get(type)![round];
      if (item) {
        favourites.push(item);
        added = true;
      }
    }
    if (!added) break;
  }

  // Variety: other types, one per type first so they are really "different".
  const others = fresh.filter((x) => !favTypes.has(x.dishType as DishType));
  const firstOfEachType: T[] = [];
  const seenTypes = new Set<DishType | undefined>();
  for (const item of others) {
    if (!seenTypes.has(item.dishType)) {
      seenTypes.add(item.dishType);
      firstOfEachType.push(item);
    }
  }
  const variety = take([...firstOfEachType, ...others], varietySlots);

  // Mix: a variety dish after every 4 favourites, so the list does not end with all of them.
  const result: T[] = [];
  let v = 0;
  favourites.forEach((item, i) => {
    result.push(item);
    if ((i + 1) % 4 === 0 && v < variety.length) result.push(variety[v++]);
  });
  result.push(...variety.slice(v));

  // Not enough dishes of those types: fill with the most popular remaining ones,
  // and only at the very end the ones the user already picked.
  if (result.length < count) result.push(...take(fresh, count - result.length));
  if (result.length < count) result.push(...take(alreadyPicked, count - result.length));
  return result.slice(0, count);
};
