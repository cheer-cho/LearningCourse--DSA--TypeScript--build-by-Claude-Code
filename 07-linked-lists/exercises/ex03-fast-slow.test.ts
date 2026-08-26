import { describe, expect, it } from 'vitest'
import { fromArray, ListNode } from './ex01-build-singly-list'
import { cycleStart, hasCycle, middleNode } from './ex03-fast-slow'

/** Build a chain from `values`, then link the tail back to the node at
 * `pos` (0-based) to create a cycle. `pos = -1` means no cycle. */
function buildCyclicList(values: number[], pos: number): ListNode<number> | null {
  const head = fromArray(values)
  if (pos < 0 || !head) return head

  let target: ListNode<number> | null = head
  for (let i = 0; i < pos; i++) target = target?.next ?? null

  let tail: ListNode<number> = head
  while (tail.next) tail = tail.next
  tail.next = target
  return head
}

describe('ex03 - middleNode', () => {
  it('returns the exact middle of an odd-length list', () => {
    expect(middleNode(fromArray([1, 2, 3, 4, 5]))?.value).toBe(3)
  })

  it('returns the SECOND middle of an even-length list', () => {
    expect(middleNode(fromArray([1, 2, 3, 4]))?.value).toBe(3)
  })

  it('handles a single element', () => {
    expect(middleNode(fromArray([7]))?.value).toBe(7)
  })

  it('handles an empty list', () => {
    expect(middleNode(fromArray<number>([]))).toBeNull()
  })

  it('handles two elements (second middle is the second element)', () => {
    expect(middleNode(fromArray([1, 2]))?.value).toBe(2)
  })
})

describe('ex03 - hasCycle', () => {
  it('is false for an acyclic list', () => {
    expect(hasCycle(fromArray([1, 2, 3]))).toBe(false)
  })

  it('is false for an empty list', () => {
    expect(hasCycle(fromArray<number>([]))).toBe(false)
  })

  it('is false for a single node with no self-loop', () => {
    expect(hasCycle(fromArray([1]))).toBe(false)
  })

  it('is true for a single node that points to itself', () => {
    expect(hasCycle(buildCyclicList([1], 0))).toBe(true)
  })

  it('is true when the tail points back into the middle', () => {
    expect(hasCycle(buildCyclicList([1, 2, 3, 4], 1))).toBe(true)
  })

  it('is true when the tail points back to the head', () => {
    expect(hasCycle(buildCyclicList([1, 2, 3], 0))).toBe(true)
  })
})

describe('ex03 - cycleStart', () => {
  it('is null for an acyclic list', () => {
    expect(cycleStart(fromArray([1, 2, 3]))).toBeNull()
  })

  it('is null for an empty list', () => {
    expect(cycleStart(fromArray<number>([]))).toBeNull()
  })

  it('finds the entry node when the cycle starts mid-list', () => {
    const head = buildCyclicList([1, 2, 3, 4, 5], 2)
    expect(cycleStart(head)?.value).toBe(3)
  })

  it('finds the entry node when the cycle starts at the head', () => {
    const head = buildCyclicList([1, 2, 3], 0)
    expect(cycleStart(head)?.value).toBe(1)
  })

  it('finds the entry node for a single self-looping node', () => {
    const head = buildCyclicList([9], 0)
    expect(cycleStart(head)?.value).toBe(9)
  })
})
