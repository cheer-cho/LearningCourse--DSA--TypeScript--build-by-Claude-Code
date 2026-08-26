// Reference solution — ex05
//
// Pattern: single-stack postfix evaluation. A number pushes; an
// operator pops the two most recent operands, applies itself, and
// pushes the result back. Postfix needs no precedence/paren handling
// because the token order already encodes evaluation order.
// O(n) time, O(n) space.

const OPERATORS = new Set(['+', '-', '*', '/'])

export function evalPostfix(tokens: string[]): number {
  const stack: number[] = []

  for (const token of tokens) {
    if (OPERATORS.has(token)) {
      const b = stack.pop()
      const a = stack.pop()
      if (a === undefined || b === undefined) {
        throw new Error(`not enough operands for '${token}'`)
      }
      stack.push(apply(token, a, b))
    } else {
      stack.push(Number(token))
    }
  }

  const result = stack.pop()
  if (result === undefined || stack.length > 0) {
    throw new Error('malformed postfix expression')
  }
  return result
}

function apply(operator: string, a: number, b: number): number {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) throw new Error('division by zero')
      return Math.trunc(a / b) // truncate toward zero, per the spec
    default:
      throw new Error(`unknown operator '${operator}'`)
  }
}
