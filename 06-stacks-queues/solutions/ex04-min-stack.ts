// Reference solution — ex04
//
// Pattern: auxiliary stack in lockstep with the main stack. `mins[i]`
// stores "the minimum of the bottom i+1 elements" — so mins' top is
// always the current running minimum. Push/pop touch both stacks'
// tops together -> every op stays O(1). O(n) space (two parallel stacks).

export class MinStack {
  private data: number[] = []
  private mins: number[] = []

  push(value: number): void {
    this.data.push(value)
    const currentMin = this.mins.length === 0 ? value : Math.min(value, this.mins[this.mins.length - 1] as number)
    this.mins.push(currentMin)
  }

  pop(): number {
    if (this.isEmpty()) throw new Error('pop from an empty stack')
    this.mins.pop()
    return this.data.pop() as number
  }

  peek(): number {
    if (this.isEmpty()) throw new Error('peek at an empty stack')
    return this.data[this.data.length - 1] as number
  }

  getMin(): number {
    if (this.isEmpty()) throw new Error('getMin on an empty stack')
    return this.mins[this.mins.length - 1] as number
  }

  size(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }
}
