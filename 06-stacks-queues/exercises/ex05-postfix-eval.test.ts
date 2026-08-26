import { describe, expect, it } from 'vitest'
import { evalPostfix } from './ex05-postfix-eval'

describe('ex06/ex05 — evalPostfix', () => {
  it('evaluates a single number with no operators', () => {
    expect(evalPostfix(['42'])).toBe(42)
  })

  it('evaluates simple binary operations', () => {
    expect(evalPostfix(['3', '4', '+'])).toBe(7)
    expect(evalPostfix(['10', '4', '-'])).toBe(6)
    expect(evalPostfix(['6', '7', '*'])).toBe(42)
    expect(evalPostfix(['20', '4', '/'])).toBe(5)
  })

  it('evaluates a nested expression', () => {
    // (5 + ((1 + 2) * 4)) - 3 = 14
    expect(evalPostfix(['5', '1', '2', '+', '4', '*', '+', '3', '-'])).toBe(14)
  })

  it('truncates division toward zero, not floor', () => {
    expect(evalPostfix(['7', '2', '/'])).toBe(3)
    expect(evalPostfix(['-7', '2', '/'])).toBe(-3)
    expect(evalPostfix(['7', '-2', '/'])).toBe(-3)
    expect(evalPostfix(['-7', '-2', '/'])).toBe(3)
  })

  it('handles negative operands and results', () => {
    expect(evalPostfix(['-3', '-4', '+'])).toBe(-7)
    expect(evalPostfix(['5', '10', '-'])).toBe(-5)
  })

  it('throws on division by zero', () => {
    expect(() => evalPostfix(['5', '0', '/'])).toThrow()
  })
})
