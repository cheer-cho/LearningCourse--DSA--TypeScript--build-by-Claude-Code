/**
 * ex04 — MinStack
 *
 * Scenario: a monitoring tool pushes/pops sensor readings constantly
 * and needs the running minimum at any instant, without ever
 * rescanning history.
 * Check: npm test -- 06 -t ex04
 */

/**
 * A stack of numbers that also answers `getMin()` in O(1), via an
 * auxiliary stack tracking the minimum seen so far at each depth.
 *
 * Edge cases: `pop`/`peek`/`getMin` on an empty stack throw.
 *
 * Example:
 *   const m = new MinStack()
 *   m.push(5); m.push(2); m.push(7)
 *   m.getMin()   -> 2
 *   m.pop()      // removes 7
 *   m.getMin()   -> 2
 *   m.pop()      // removes 2
 *   m.getMin()   -> 5
 *
 * Target complexity: O(1) time for every operation, O(n) space.
 */
export class MinStack {
  push(value: number): void {
    throw new Error('TODO: implement me')
  }

  pop(): number {
    throw new Error('TODO: implement me')
  }

  peek(): number {
    throw new Error('TODO: implement me')
  }

  getMin(): number {
    throw new Error('TODO: implement me')
  }

  size(): number {
    throw new Error('TODO: implement me')
  }

  isEmpty(): boolean {
    throw new Error('TODO: implement me')
  }
}
