// Unit tests for the Lezzet Arenası bracket (src/data/bracket.ts).
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRound, roundKind, roundCount, playTournament } from "../src/data/bracket.ts";

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

test("no dish is dropped and matches have 2 or 3 dishes, for 2 to 40 dishes", () => {
  for (let n = 2; n <= 40; n++) {
    const matches = buildRound(range(n));
    assert.deepEqual(matches.flat().sort((a, b) => a - b), range(n), `n=${n}`);
    for (const m of matches) assert.ok(m.length === 2 || m.length === 3, `n=${n}: ${JSON.stringify(m)}`);
    assert.equal(matches.filter((m) => m.length === 3).length, n % 2, `n=${n}: one three-way duel when odd`);
  }
});

test("odd counts: 5 and 7", () => {
  assert.deepEqual(buildRound(range(5)), [[1, 2], [3, 4, 5]]);
  assert.deepEqual(buildRound(range(7)), [[1, 2], [3, 4], [5, 6, 7]]);
  assert.deepEqual(buildRound(range(3)), [[1, 2, 3]]);
});

test("any dish can become champion, for 4 to 20 dishes", () => {
  for (let n = 4; n <= 20; n++) {
    for (const target of range(n)) {
      // Pick the target when it is in the match, otherwise the first dish.
      const { champion } = playTournament(range(n), (m) => (m.includes(target) ? target : m[0]));
      assert.equal(champion, target, `n=${n}, target=${target}`);
    }
  }
});

test("round names: last round is the final, the one before the semi-final", () => {
  for (let n = 4; n <= 20; n++) {
    const { rounds } = playTournament(range(n), (m) => m[0]);
    const kinds = rounds.map((r) => roundKind(r.length));
    assert.equal(kinds[kinds.length - 1], "final", `n=${n}`);
    assert.equal(rounds[rounds.length - 1].length, 1, `n=${n}: final is one match`);
    if (rounds.length >= 2) assert.equal(kinds[kinds.length - 2], rounds[rounds.length - 2].length === 2 ? "semi" : "quarter", `n=${n}`);
    assert.equal(rounds.length, roundCount(n), `n=${n}`);
  }
  assert.deepEqual(playTournament(range(8), (m) => m[0]).rounds.map((r) => roundKind(r.length)), ["quarter", "semi", "final"]);
  assert.deepEqual(playTournament(range(5), (m) => m[0]).rounds.map((r) => roundKind(r.length)), ["semi", "final"]);
  assert.deepEqual(playTournament(range(7), (m) => m[0]).rounds.map((r) => roundKind(r.length)), ["quarter", "final"]);
});

test("small inputs", () => {
  assert.deepEqual(buildRound([]), []);
  assert.deepEqual(buildRound([1]), []);
  assert.equal(playTournament([], (m) => m[0]).champion, null);
  assert.equal(playTournament([9], (m) => m[0]).champion, 9);
});
