import { describe, expect, it } from 'vitest'
import { DoublyLinkedList } from './ex06-build-doubly-list'

describe('ex06 - DoublyLinkedList', () => {
  it('pushBack appends in order', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    list.pushBack(3)
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  it('pushFront prepends in order', () => {
    const list = new DoublyLinkedList<number>()
    list.pushFront(3)
    list.pushFront(2)
    list.pushFront(1)
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  it('mixes pushFront and pushBack', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(2)
    list.pushFront(1)
    list.pushBack(3)
    expect(list.toArray()).toEqual([1, 2, 3])
  })

  it('popFront removes from the front', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    expect(list.popFront()).toBe(1)
    expect(list.toArray()).toEqual([2])
  })

  it('popBack removes from the back', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    list.pushBack(2)
    expect(list.popBack()).toBe(2)
    expect(list.toArray()).toEqual([1])
  })

  it('popFront and popBack on an empty list throw', () => {
    const list = new DoublyLinkedList<number>()
    expect(() => list.popFront()).toThrow()
    expect(() => list.popBack()).toThrow()
  })

  it('popFront then pushBack on a single-element list still works', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    expect(list.popFront()).toBe(1)
    list.pushBack(2)
    expect(list.toArray()).toEqual([2])
  })

  it('popBack then pushFront on a single-element list still works', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    expect(list.popBack()).toBe(1)
    list.pushFront(2)
    expect(list.toArray()).toEqual([2])
  })

  it('removeNode removes an arbitrary node in the middle', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    const two = list.pushBack(2)
    list.pushBack(3)
    list.removeNode(two)
    expect(list.toArray()).toEqual([1, 3])
  })

  it('removeNode on the first real node behaves like popFront', () => {
    const list = new DoublyLinkedList<number>()
    const one = list.pushBack(1)
    list.pushBack(2)
    list.removeNode(one)
    expect(list.toArray()).toEqual([2])
  })

  it('removeNode on the last real node behaves like popBack', () => {
    const list = new DoublyLinkedList<number>()
    list.pushBack(1)
    const two = list.pushBack(2)
    list.removeNode(two)
    expect(list.toArray()).toEqual([1])
  })

  it('removeNode on the only node empties the list', () => {
    const list = new DoublyLinkedList<number>()
    const only = list.pushBack(1)
    list.removeNode(only)
    expect(list.toArray()).toEqual([])
    expect(() => list.popFront()).toThrow()
  })

  it('pushFront/pushBack return the created node for later removeNode calls', () => {
    const list = new DoublyLinkedList<string>()
    const node = list.pushBack('a')
    expect(node.value).toBe('a')
    expect(node.prev).not.toBeNull()
    expect(node.next).not.toBeNull()
  })
})
