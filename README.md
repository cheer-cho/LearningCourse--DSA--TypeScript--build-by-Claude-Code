# Data Structures & Algorithms — TypeScript Edition

A self-paced, hands-on DSA course: from "what is Big-O?" to hard
interview problems. You learn by making tests pass, not by reading
long documents. Study it in VS Code with Claude Code as your
instructor (it reads `CLAUDE.md` and coaches you — Socratic hints,
never spoilers).

A twin course with the identical curriculum exists in Python at
`~/study/Python/DSA-Course-Created-By-Claude/`.

## What you'll master

- Every core data structure — most of them **built from scratch**
  (dynamic array, hash map, linked lists, stack, queue, BST, heap,
  trie, union-find, segment tree, Fenwick tree).
- Every interview pattern: two pointers, sliding window, prefix sums,
  monotonic stack, fast & slow pointers, top-K, backtracking, BFS/DFS,
  topological sort, Dijkstra, greedy, intervals, 1-D/2-D DP, bits,
  KMP/Rabin-Karp — and, above all, **how to recognize which one a new
  problem needs**.

## Setup

1. Node 20+.
2. `npm install` in this folder — that's it.
3. VS Code: Mermaid diagrams render in Markdown preview via the
   "Markdown Preview Mermaid Support" extension.

## The study loop

1. Open the next module's `LESSON.md` (short, diagram-first).
2. Work through `exercises/` in order — each file says how to run
   its tests at the top. Red → your turn; green → done.
3. Stuck? Ask your instructor for a hint (it escalates gently and
   never spoils). Solutions live in `solutions/` — look only when
   you've truly decided to.
4. Finish with the module checkpoint, then skim `SUMMARY.md` and do
   its self-quiz + pattern-recognition drill.
5. Tick your progress in `ROADMAP.md` (the instructor does this for
   you when checkpoints pass).

## Commands

| What | Command |
| --- | --- |
| Everything | `npm test` |
| One module | `npm test -- 5` |
| One exercise | `npm test -- 5 -t ex03` |
| A checkpoint | `npm test -- 5 -t checkpoint` |
| Scratch file | `npx tsx playground/idea.ts` |
| Maintenance: verify reference solutions | `npm run verify:solutions -- 05` |

Tests check runtime behavior AND types (vitest with typecheck). On a
fresh clone **every exercise test fails on purpose** — each red test
is an exercise waiting for you. Nothing should fail to compile.

## Layout

```
NN-module-name/
  LESSON.md          # the concept, diagram-first
  exercises/         # your work: exNN-slug.ts + its tests
  solutions/         # reference solutions — no peeking
  checkpoint.ts      # graded module finale (+ checkpoint.test.ts)
  SUMMARY.md         # cheat-sheet, mindmap, quiz, pattern drill
```

Start with `ROADMAP.md` to see the whole path, then open
`01-big-o-foundations/LESSON.md`. Good luck — and think in patterns.
