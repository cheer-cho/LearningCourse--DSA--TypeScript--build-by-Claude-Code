import { describe, expect, it } from 'vitest'
import { fromArray, ListNode, SinglyLinkedList, toArray } from './ex01-build-singly-list'

describe('ex01 - fromArray / toArray', () => {
  it('round-trips a plain array through a node chain', () => {
    const head = fromArray([1, 2, 3])
    expect(toArray(head)).toEqual([1, 2, 3])
  })

  it('handles an empty array', () => {
    expect(fromArray<number>([])).toBeNull()
    expect(toArray<number>(null)).toEqual([])
  })

  it('handles a single element', () => {
    const head = fromArray(['solo'])
    expect(head).toBeInstanceOf(ListNode)
    expect(toArray(head)).toEqual(['solo'])
  })

  it('links nodes in order (next pointers walk forward correctly)', () => {
    const head = fromArray([10, 20, 30])
    expect(head?.value).toBe(10)
    expect(head?.next?.value).toBe(20)
    expect(head?.next?.next?.value).toBe(30)
    expect(head?.next?.next?.next).toBeNull()
  })
})

describe('ex01 - SinglyLinkedList', () => {
  it('pushBack appends in order', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    list.pushBack(3)
    expect(list.toArray()).toEqual([1, 2, 3])
    expect(list.size()).toBe(3)
  })

  it('pushFront prepends in order', () => {
    const list = new SinglyLinkedList<number>()
    list.pushFront(3)
    list.pushFront(2)
    list.pushFront(1)
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  it('mixes pushFront and pushBack', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(2)
    list.pushFront(1)
    list.pushBack(3)
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  it('popFront removes and returns the head value', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    expect(list.popFront()).toBe(1)
    expect(list.toArray()).toEqual([2])
    expect(list.size()).toBe(1)
  })

  it('popFront on an empty list throws', () => {
    const list = new SinglyLinkedList<number>()
    expect(() => list.popFront()).toThrow()
    expect(list.size()).toBe(0)
  })

  it('popFront down to empty then pushBack still works (tail stays correct)', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.popFront()
    list.pushBack(2)
    list.pushBack(3)
    expect(list.toArray()).toEqual([2, 3])
  })

  it('find returns the node holding a value, or null', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    list.pushBack(3)
    expect(list.find(2)?.value).toBe(2)
    expect(list.find(99)).toBeNull()
  })

  it('deleteValue removes the first matching node and reports success', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    list.pushBack(3)
    expect(list.deleteValue(2)).toBe(true)
    expect(list.toArray()).toEqual([1, 3])
    expect(list.deleteValue(99)).toBe(false)
  })

  it('deleteValue on the head updates head correctly', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    expect(list.deleteValue(1)).toBe(true)
    expect(list.toArray()).toEqual([2])
  })

  it('deleteValue on the tail keeps the tail pointer correct for a later pushBack', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    expect(list.deleteValue(2)).toBe(true)
    list.pushBack(3)
    expect(list.toArray()).toEqual([1, 3])
  })

  it('deleteValue on a single-element list empties it', () => {
    const list = new SinglyLinkedList<number>()
    list.pushBack(1)
    expect(list.deleteValue(1)).toBe(true)
    expect(list.toArray()).toEqual([])
    expect(list.size()).toBe(0)
  })

  it('size tracks pushes and pops', () => {
    const list = new SinglyLinkedList<number>()
    expect(list.size()).toBe(0)
    list.pushBack(1)
    list.pushFront(0)
    expect(list.size()).toBe(2)
    list.popFront()
    expect(list.size()).toBe(1)
  })

  it('efficiency: 100_000 pushBacks stay fast because tail is O(1)', () => {
    const list = new SinglyLinkedList<number>()
    for (let i = 0; i < 100_000; i++) {
      list.pushBack(i)
    }
    expect(list.size()).toBe(100_000)
    expect(list.head?.value).toBe(0)
    expect(list.tail?.value).toBe(99_999)
  })
})
