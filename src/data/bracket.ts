// ==========================================
// LEZZET ARENASI bracket.
//
// Every liked dish takes part; none is dropped. Each round pairs the dishes two by two.
// When a round has an odd number of dishes, its last match is a three-way duel
// (the user picks one of three), so the count still halves (roughly) every round.
//   4 -> 2 -> 1      5 -> (2+3) -> 2 -> 1      7 -> (2+2+3) -> 3 -> 1 (three-way final)
// Pure functions only, tested in tests/bracket.test.ts.
// ==========================================

// Splits a round into matches of 2 (and one of 3 when the count is odd).
export const buildRound = <T>(items: T[]): T[][] => {
  if (items.length <= 1) return [];
  if (items.length === 3) return [items.slice()];
  const matches: T[][] = [];
  const pairs = items.length % 2 === 0 ? items.length / 2 : (items.length - 3) / 2;
  for (let i = 0; i < pairs; i++) matches.push(items.slice(i * 2, i * 2 + 2));
  if (items.length % 2 === 1) matches.push(items.slice(-3));
  return matches;
};

export type RoundKind = "final" | "semi" | "quarter" | "round";

// Name of a round from how many matches it has.
export const roundKind = (matchCount: number): RoundKind =>
  matchCount <= 1 ? "final" : matchCount === 2 ? "semi" : matchCount <= 4 ? "quarter" : "round";

// Number of rounds needed to get a champion out of n dishes.
export const roundCount = (n: number): number => {
  let rounds = 0;
  let left = n;
  while (left > 1) {
    left = buildRound(new Array(left).fill(0)).length;
    rounds++;
  }
  return rounds;
};

// Runs a whole tournament with a chooser (used by tests and by nothing else).
export const playTournament = <T>(items: T[], choose: (match: T[]) => T): { champion: T | null; rounds: T[][][] } => {
  if (items.length === 0) return { champion: null, rounds: [] };
  let current = items.slice();
  const rounds: T[][][] = [];
  while (current.length > 1) {
    const matches = buildRound(current);
    rounds.push(matches);
    current = matches.map(choose);
  }
  return { champion: current[0], rounds };
};
