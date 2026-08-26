// Reference solution — checkpoint 06
//
// EditorHistory: two-stack undo/redo. Each action (type/deleteLast)
// pushes the PREVIOUS text onto undoStack before mutating, then wipes
// redoStack — a fresh action always invalidates stale "future" state.
// undo() pushes the current text onto redoStack and pops undoStack;
// redo() is the mirror image. Empty-history calls are silent no-ops —
// the real-world editor behavior (backspacing/undoing past the start
// of the document just does nothing). O(1) amortized per call
// (bounded by the string length touched), O(n) space for n total
// characters.
//
// spans: monotonic (decreasing) stack of day indexes, same shape as
// ex06's next-greater-element scan — the span is the distance back to
// the nearest strictly-higher price (or the start of the array).
// O(n) time, O(n) space.

export class EditorHistory {
  private text = ''
  private undoStack: string[] = []
  private redoStack: string[] = []

  type(text: string): void {
    this.undoStack.push(this.text)
    this.text += text
    this.redoStack = []
  }

  deleteLast(): void {
    if (this.text.length === 0) return
    this.undoStack.push(this.text)
    this.text = this.text.slice(0, -1)
    this.redoStack = []
  }

  undo(): void {
    if (this.undoStack.length === 0) return
    this.redoStack.push(this.text)
    this.text = this.undoStack.pop() as string
  }

  redo(): void {
    if (this.redoStack.length === 0) return
    this.undoStack.push(this.text)
    this.text = this.redoStack.pop() as string
  }

  getText(): string {
    return this.text
  }
}

export function spans(prices: number[]): number[] {
  const result = new Array(prices.length).fill(0)
  const stack: number[] = [] // indexes, strictly decreasing prices top-to-bottom

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i] as number
    while (stack.length > 0 && (prices[stack[stack.length - 1] as number] as number) <= current) {
      stack.pop()
    }
    const previousHigherIndex = stack.length === 0 ? -1 : (stack[stack.length - 1] as number)
    result[i] = i - previousHigherIndex
    stack.push(i)
  }
  return result
}
