# Course-Wide Conventions — TypeScript DSA course (read this first)

You are one of several agents building a self-paced Data Structures &
Algorithms course. The master spec is `../build-dsa-course.md` — read it
fully, especially the **Pedagogy** section: the thinking process
(pattern recognition, brute force → optimal) is the product.

Style reference: `/home/acheer/study/TypeScript/Course-Created-By-Claude/`
— e.g. `05-unions-narrowing/LESSON.md` and its exercises. Match that
tone: short sentences, diagram-first, encouraging, no walls of text.

## Repo root
`/home/acheer/study/TypeScript/DSA-Course-Created-By-Claude/`

## Toolchain
- TypeScript 5 strict (see tsconfig — `noUncheckedIndexedAccess` is ON:
  index reads are `T | undefined`; write code accordingly).
- vitest with typecheck enabled; deps already installed (`npm install`
  done). Node built-ins only; no new dependencies.
- No library shortcuts inside "build it from scratch" exercises the
  handoff marks (e.g. no `Map` for a hash map's core bucket mapping).
  Elsewhere, `Map`/`Set`/`Array` methods are encouraged. JS has no
  built-in heap/deque — modules that need one after module 12 may
  include a small provided implementation in the exercise file (the
  handoff says when).

## Module folder anatomy
```
NN-module-name/
  LESSON.md            # follows the 8-step flow in the master spec
  exercises/
    exNN-slug.ts       # stub the student edits
    exNN-slug.test.ts  # vitest tests for it
  solutions/
    exNN-slug.ts       # reference solution (same filename as stub)
    checkpoint.ts      # reference solution for the checkpoint
  checkpoint.ts        # graded checkpoint stub (module root)
  checkpoint.test.ts
  SUMMARY.md           # cheat-sheet + mindmap + self-quiz
                       #  + pattern-recognition drill (spec requires it)
```

## Naming
Handoffs name exercises with neutral slugs like `ex03 "pair-sum"`.
Concrete filename here: `ex03-pair-sum.ts` (slug → kebab-case), test
`ex03-pair-sum.test.ts`. Tests import relatively:
`import { pairSum } from './ex03-pair-sum'`. Solutions keep the same
basename as the stub they replace. Function/class names in camelCase /
PascalCase (`pairSum`, `MinHeap`).

## Exercise file rules
- File header comment: 2–4 lines — scenario, pattern(s) covered, exact
  test command. Never a numbered spec.
- Each exported function/class carries a JSDoc block: what it does,
  params, return, edge cases, 1–3 `input -> output` examples, and a
  **Target complexity:** line (e.g. `Target: O(n) time, O(1) space`).
- Stub bodies: `throw new Error('TODO: implement me')` after the JSDoc.
  For class builds, stub every method that way. Stubs must TYPE-CHECK
  on a fresh clone (return type satisfied by the throw).
- Difficulty progresses ex01 → exNN: build/guided first, then classic
  problems easy → hard.

## Test file rules
- vitest: `import { describe, it, expect } from 'vitest'`; descriptive
  test names (`it('handles negatives', ...)`).
- Several small tests per exercise: happy path, edge cases (empty,
  single element, duplicates, negatives, already-sorted, all-equal...).
- Where the handoff says "efficiency test": one large-input test
  (input built programmatically) sized so the naive approach is
  infeasible but the target complexity passes instantly. Never tight
  wall-clock assertions.
- Tests must be red against the stub, green against the solution.
- Use `expect(() => ...).toThrow()` for error specs and
  `toBeCloseTo` for floats. `expectTypeOf` only where a type is part
  of the exercise's contract (rare in this course).

## Solution file rules
- Must meet the stated target complexity.
- Top-of-function comment block: pattern used, why it applies here,
  time/space complexity. Keep it 3–6 lines.

## Commands (already wired — do not redefine)
- `npm test` — everything
- `npm test -- 05` — one module
- `npm test -- 05 -t ex02` — one exercise
- `npm run verify:solutions -- 05` — module's tests against reference
  solutions (must exit 0)

## Mermaid rules
- Every LESSON.md: at least 2 diagrams (structure/algorithm state
  diagrams are ideal); every SUMMARY.md: exactly one `mindmap`. Every
  diagram gets a one-line italic caption starting "*What to notice:*".
- Only widely-supported syntax (flowchart TD/LR, graph, sequenceDiagram,
  mindmap). Quote node labels with special characters.

## Definition of done for a module (verify ALL before finishing)
1. `npm test -- <NN>` — collects and runs with no compile/type errors;
   every failure is an unsolved exercise (the TODO throw), never a
   type or import error.
2. `npm run verify:solutions -- <NN>` — exits 0 (all green against
   solutions, including typecheck).
3. LESSON.md follows the 8-step flow (incl. "How to recognize it");
   SUMMARY.md has the pattern-recognition drill.
4. You did NOT edit any file outside your module folder.

Report back (final message): module name, exercise list (one line
each), verification outputs summarized, any convention you had to bend
(should be none).
