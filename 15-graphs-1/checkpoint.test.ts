import { describe, expect, it } from 'vitest'
import { canTwoTeam, degreesOfSeparation, friendCircles, suggestedFriends } from './checkpoint'

// Simple helper to build a star graph: hub connected to n leaves
function star(hub: number, leaves: number[]): [number, number][] {
  return leaves.map((l) => [hub, l] as [number, number])
}

describe('checkpoint — friendCircles', () => {
  it('two components: one connected trio and one isolated user', () => {
    expect(friendCircles([[0, 1], [1, 2]], 4)).toBe(2)
  })

  it('everyone connected: one big circle', () => {
    expect(friendCircles([[0, 1], [1, 2], [2, 3]], 4)).toBe(1)
  })

  it('no friendships: n separate circles', () => {
    expect(friendCircles([], 5)).toBe(5)
  })

  it('single user is their own circle', () => {
    expect(friendCircles([], 1)).toBe(1)
  })

  it('zero users gives zero circles', () => {
    expect(friendCircles([], 0)).toBe(0)
  })

  it('efficiency: 50_000 edges in one big component', () => {
    const n = 50_001
    const edges: [number, number][] = []
    for (let i = 0; i < 50_000; i++) edges.push([i, i + 1])
    expect(friendCircles(edges, n)).toBe(1)
  })
})

describe('checkpoint — degreesOfSeparation', () => {
  it('same user is 0 hops', () => {
    expect(degreesOfSeparation([[0, 1]], 0, 0)).toBe(0)
  })

  it('direct friends are 1 hop apart', () => {
    expect(degreesOfSeparation([[0, 1], [1, 2]], 0, 1)).toBe(1)
  })

  it('chain of 4: 3 hops end to end', () => {
    expect(degreesOfSeparation([[0, 1], [1, 2], [2, 3]], 0, 3)).toBe(3)
  })

  it('disconnected users return -1', () => {
    // 0-1 and 2-3 are two separate components
    expect(degreesOfSeparation([[0, 1], [2, 3]], 0, 2)).toBe(-1)
  })

  it('picks the shorter of two paths', () => {
    // 0-1-2-3 (length 3) and also 0-3 directly (length 1)
    const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 3]]
    expect(degreesOfSeparation(edges, 0, 3)).toBe(1)
  })
})

describe('checkpoint — suggestedFriends', () => {
  it('basic friends-of-friends: two suggestions', () => {
    // 0 friends with 1; 1 friends with 2 and 3 -> suggest 2, 3
    expect(suggestedFriends([[0, 1], [1, 2], [1, 3]], 0)).toEqual([2, 3])
  })

  it('already-direct-friend excluded from suggestions', () => {
    // 0's direct friends: 1, 2. Friends of 1: 0, 2. Friends of 2: 0, 1.
    // 2 is a friend of a friend but is ALSO a direct friend -> not suggested.
    const edges: [number, number][] = [[0, 1], [0, 2], [1, 2]]
    expect(suggestedFriends(edges, 0)).toEqual([])
  })

  it('result is sorted ascending', () => {
    // 0 friends 5; 5 friends 3, 7, 1 -> suggestions: 1, 3, 7
    expect(suggestedFriends([[0, 5], [5, 3], [5, 7], [5, 1]], 0)).toEqual([1, 3, 7])
  })

  it('user with no friends has no suggestions', () => {
    expect(suggestedFriends([[1, 2]], 0)).toEqual([])
  })

  it('user not in the edge list at all has no suggestions', () => {
    expect(suggestedFriends([], 42)).toEqual([])
  })

  it('user themselves never appears in suggestions', () => {
    // 0-1, 1-2, 2-0: this forms a triangle but via the FOF route
    // 0's friend is 1; 1's friends are 0 and 2 -> 0 is FOF of itself, but excluded
    const suggestions = suggestedFriends([[0, 1], [1, 2]], 0)
    expect(suggestions).not.toContain(0)
  })
})

describe('checkpoint — canTwoTeam', () => {
  it('simple edge: two people can always be split into two teams', () => {
    expect(canTwoTeam([[0, 1]], 2)).toBe(true)
  })

  it('triangle (odd cycle) cannot be split', () => {
    expect(canTwoTeam([[0, 1], [1, 2], [2, 0]], 3)).toBe(false)
  })

  it('a square (even cycle) can be split', () => {
    expect(canTwoTeam([[0, 1], [1, 2], [2, 3], [3, 0]], 4)).toBe(true)
  })

  it('no friendships: everyone on either team is fine', () => {
    expect(canTwoTeam([], 5)).toBe(true)
  })

  it('disconnected: one bipartite component and one triangle -> false', () => {
    const edges: [number, number][] = [[0, 1], [2, 3], [3, 4], [4, 2]]
    expect(canTwoTeam(edges, 5)).toBe(false)
  })

  it('disconnected: both components bipartite -> true', () => {
    const edges: [number, number][] = [[0, 1], [2, 3]]
    expect(canTwoTeam(edges, 4)).toBe(true)
  })

  it('star graph (all leaves connected to hub only) is bipartite', () => {
    // hub=0, leaves 1..6: every edge is hub-leaf, never leaf-leaf
    const edges = star(0, [1, 2, 3, 4, 5, 6])
    expect(canTwoTeam(edges, 7)).toBe(true)
  })
})
