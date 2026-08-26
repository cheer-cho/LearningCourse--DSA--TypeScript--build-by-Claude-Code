/**
 * ✦ CHECKPOINT 6 — Stacks & Queues
 *
 * An editor's undo/redo history (two stacks) and the classic
 * "stock span" problem (a monotonic stack). Combines everything the
 * module covered: LIFO history, the redo-invalidation subtlety, and
 * store-the-index monotonic scanning.
 *
 * Passing `npm test -- 06` completes this module.
 */

/**
 * A text editor's undo/redo history, built on two stacks of past text
 * states.
 *
 * - `type(text)` appends `text` to the document. It is one undoable
 *   action, and — the classic subtlety — it THROWS AWAY any pending
 *   redo history, exactly like a real editor: once you've typed
 *   something new, the "future" you undid past is gone.
 * - `deleteLast()` removes exactly the last character (a single
 *   backspace). Also one undoable action; also clears redo. Deleting
 *   from an already-empty document does nothing — no history entry is
 *   recorded, so a following undo skips right past it.
 * - `undo()` reverts the most recent action. Undoing with no history
 *   does nothing.
 * - `redo()` re-applies the most recently undone action. Redoing with
 *   no undone history does nothing.
 * - `getText()` returns the current document contents.
 *
 * Example:
 *   const e = new EditorHistory()
 *   e.type('hello')
 *   e.type(' world')
 *   e.undo()          // back to 'hello'
 *   e.getText()        -> 'hello'
 *   e.type('!')        // 'hello!' — the ' world' redo is gone now
 *   e.redo()           // no-op, text stays 'hello!'
 *
 * Target complexity: O(1) amortized per call for `type`/`undo`/`redo`
 * (bounded by the length of the appended/removed text), O(n) space
 * for n total characters ever typed.
 */
export class EditorHistory {
  type(text: string): void {
    throw new Error('TODO: implement me')
  }

  deleteLast(): void {
    throw new Error('TODO: implement me')
  }

  undo(): void {
    throw new Error('TODO: implement me')
  }

  redo(): void {
    throw new Error('TODO: implement me')
  }

  getText(): string {
    throw new Error('TODO: implement me')
  }
}

/**
 * Stock span: `prices[i]` is a stock's closing price on day `i`. The
 * "span" of day `i` is how many consecutive days ENDING at day `i`
 * (today included) had a price less than or equal to today's,
 * counting backward until a strictly higher price breaks the streak
 * (or the start of the array).
 *
 * Edge cases: empty input -> `[]`; a strictly increasing price series
 * -> `[1, 2, 3, ...]` (every prior day counts).
 *
 * Example:
 *   spans([100, 80, 60, 70, 60, 75, 85]) -> [1, 1, 1, 2, 1, 4, 6]
 *
 * Target complexity: O(n) time, O(n) space.
 */
export function spans(prices: number[]): number[] {
  throw new Error('TODO: implement me')
}
