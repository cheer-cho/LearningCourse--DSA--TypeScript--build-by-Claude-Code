import { describe, expect, it } from 'vitest'
import {
  allPlansWithinBudget,
  type MenuItem,
  plansHittingExact,
  tastingOrders,
} from './checkpoint'

function normalizePlans(plans: MenuItem[][]): string[] {
  return plans
    .map((plan) => JSON.stringify([...plan].sort((a, b) => a.dish.localeCompare(b.dish))))
    .sort()
}

function normalizeOrders(orders: string[][]): string[] {
  return orders.map((order) => JSON.stringify(order)).sort()
}

describe('checkpoint 14 — allPlansWithinBudget', () => {
  const menu: MenuItem[] = [
    { dish: 'a', cost: 3 },
    { dish: 'b', cost: 5 },
    { dish: 'c', cost: 2 },
  ]

  it('finds every affordable subset', () => {
    expect(normalizePlans(allPlansWithinBudget(menu, 5))).toEqual(
      normalizePlans([
        [],
        [{ dish: 'a', cost: 3 }],
        [{ dish: 'b', cost: 5 }],
        [{ dish: 'c', cost: 2 }],
        [
          { dish: 'a', cost: 3 },
          { dish: 'c', cost: 2 },
        ],
      ]),
    )
  })

  it('budget 0: only the empty plan fits', () => {
    expect(allPlansWithinBudget(menu, 0)).toEqual([[]])
  })

  it('empty menu: only the empty plan, regardless of budget', () => {
    expect(allPlansWithinBudget([], 100)).toEqual([[]])
  })

  it('prune makes a 30-item menu instant even though unpruned 2^30 subsets would not be', () => {
    const bigMenu: MenuItem[] = Array.from({ length: 30 }, (_, i) => ({
      dish: `dish-${i}`,
      cost: 1000,
    }))
    // Any 2 items already cost 2000 > 1500, so only the empty plan and
    // the 30 single-item plans fit — a correctly pruned search finds
    // this instantly; an unpruned 2^30 search would not finish.
    const result = allPlansWithinBudget(bigMenu, 1500)
    expect(result.length).toBe(31)
    expect(result.filter((plan) => plan.length === 0).length).toBe(1)
    expect(result.filter((plan) => plan.length === 1).length).toBe(30)
    expect(result.every((plan) => plan.length <= 1)).toBe(true)
  })
})

describe('checkpoint 14 — plansHittingExact', () => {
  it('no reuse: only combination that hits the target exactly', () => {
    const menu: MenuItem[] = [
      { dish: 'a', cost: 2 },
      { dish: 'b', cost: 3 },
      { dish: 'c', cost: 6 },
      { dish: 'd', cost: 7 },
    ]
    expect(normalizePlans(plansHittingExact(menu, 7, false))).toEqual(
      normalizePlans([[{ dish: 'd', cost: 7 }]]),
    )
  })

  it('reuse allowed: the same dish can appear more than once', () => {
    const menu: MenuItem[] = [
      { dish: 'x', cost: 2 },
      { dish: 'y', cost: 3 },
    ]
    expect(normalizePlans(plansHittingExact(menu, 7, true))).toEqual(
      normalizePlans([
        [
          { dish: 'x', cost: 2 },
          { dish: 'x', cost: 2 },
          { dish: 'y', cost: 3 },
        ],
      ]),
    )
  })

  it('unreachable target -> no plans', () => {
    const menu: MenuItem[] = [{ dish: 'x', cost: 4 }]
    expect(plansHittingExact(menu, 7, true)).toEqual([])
  })
})

describe('checkpoint 14 — tastingOrders', () => {
  it('empty menu: one order, the empty one', () => {
    expect(tastingOrders([])).toEqual([[]])
  })

  it('single dish: one order', () => {
    expect(tastingOrders(['soup'])).toEqual([['soup']])
  })

  it('three dishes: all 6 orderings', () => {
    expect(normalizeOrders(tastingOrders(['soup', 'salad', 'steak']))).toEqual(
      normalizeOrders([
        ['soup', 'salad', 'steak'],
        ['soup', 'steak', 'salad'],
        ['salad', 'soup', 'steak'],
        ['salad', 'steak', 'soup'],
        ['steak', 'soup', 'salad'],
        ['steak', 'salad', 'soup'],
      ]),
    )
  })

  it('8 unique dishes produces 8! orderings with no duplicates', () => {
    const dishes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const orders = tastingOrders(dishes)
    expect(orders.length).toBe(40320)
    expect(new Set(normalizeOrders(orders)).size).toBe(40320)
  })
})
