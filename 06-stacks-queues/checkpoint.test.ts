import { describe, expect, it } from 'vitest'
import { EditorHistory, spans } from './checkpoint'

describe('checkpoint 06 — EditorHistory', () => {
  it('types text and accumulates it', () => {
    const e = new EditorHistory()
    e.type('hello')
    e.type(' world')
    expect(e.getText()).toBe('hello world')
  })

  it('deletes the last character', () => {
    const e = new EditorHistory()
    e.type('abc')
    e.deleteLast()
    expect(e.getText()).toBe('ab')
  })

  it('deleteLast on an empty document is a no-op', () => {
    const e = new EditorHistory()
    e.deleteLast()
    expect(e.getText()).toBe('')
  })

  it('undo reverts the most recent action', () => {
    const e = new EditorHistory()
    e.type('hello')
    e.type(' world')
    e.undo()
    expect(e.getText()).toBe('hello')
  })

  it('redo re-applies the most recently undone action', () => {
    const e = new EditorHistory()
    e.type('hello')
    e.type(' world')
    e.undo()
    e.redo()
    expect(e.getText()).toBe('hello world')
  })

  it('undo/redo work across deleteLast too', () => {
    const e = new EditorHistory()
    e.type('abc')
    e.deleteLast()
    expect(e.getText()).toBe('ab')
    e.undo()
    expect(e.getText()).toBe('abc')
    e.redo()
    expect(e.getText()).toBe('ab')
  })

  it('typing after an undo clears the redo stack (the classic subtlety)', () => {
    const e = new EditorHistory()
    e.type('hello')
    e.type(' world')
    e.undo() // back to 'hello', ' world' sits in redo
    e.type('!') // new action -> redo history is gone
    expect(e.getText()).toBe('hello!')
    e.redo() // nothing to redo — ' world' is gone forever
    expect(e.getText()).toBe('hello!')
  })

  it('deleteLast after an undo also clears the redo stack', () => {
    const e = new EditorHistory()
    e.type('hello')
    e.type(' world')
    e.undo()
    e.deleteLast()
    expect(e.getText()).toBe('hell')
    e.redo()
    expect(e.getText()).toBe('hell')
  })

  it('undo with no history is a no-op', () => {
    const e = new EditorHistory()
    e.undo()
    expect(e.getText()).toBe('')
  })

  it('redo with no undone history is a no-op', () => {
    const e = new EditorHistory()
    e.type('cat')
    e.redo()
    expect(e.getText()).toBe('cat')
  })

  it('handles a long interleaved sequence of type/delete/undo/redo', () => {
    const e = new EditorHistory()
    e.type('a') // 'a'
    e.type('b') // 'ab'
    e.deleteLast() // 'a'
    e.type('c') // 'ac'
    e.undo() // undoes type('c') -> 'a'
    e.undo() // undoes deleteLast -> 'ab'
    e.redo() // redoes deleteLast -> 'a'
    expect(e.getText()).toBe('a')
    e.type('z') // 'az', clears redo history
    expect(e.getText()).toBe('az')
    e.undo() // -> 'a'
    e.undo() // -> 'ab'
    expect(e.getText()).toBe('ab')
    e.undo() // -> 'a'
    e.undo() // -> ''
    expect(e.getText()).toBe('')
    e.undo() // no history left — no-op
    expect(e.getText()).toBe('')
  })
})

describe('checkpoint 06 — spans', () => {
  it('returns [] for empty input', () => {
    expect(spans([])).toEqual([])
  })

  it('matches the worked example from the docstring', () => {
    expect(spans([100, 80, 60, 70, 60, 75, 85])).toEqual([1, 1, 1, 2, 1, 4, 6])
  })

  it('gives span 1 to every day in a strictly decreasing series', () => {
    expect(spans([50, 40, 30, 20])).toEqual([1, 1, 1, 1])
  })

  it('accumulates span across a strictly increasing series', () => {
    expect(spans([10, 20, 30, 40])).toEqual([1, 2, 3, 4])
  })

  it('handles all-equal prices', () => {
    expect(spans([5, 5, 5, 5])).toEqual([1, 2, 3, 4])
  })

  it('handles a single price', () => {
    expect(spans([42])).toEqual([1])
  })

  it('stays fast on a 200_000-day strictly increasing series (worst case for the stack)', () => {
    const n = 200_000
    const prices = Array.from({ length: n }, (_, i) => i + 1)
    const result = spans(prices)
    expect(result.length).toBe(n)
    expect(result[n - 1]).toBe(n)
    expect(result[0]).toBe(1)
  })
})
