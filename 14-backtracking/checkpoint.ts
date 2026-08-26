/**
 * CHECKPOINT 14 — Meal-plan builder
 *
 * A restaurant's tasting-menu tool. Combines all three backtracking
 * shapes from this module against one domain: a menu of (dish, cost)
 * items. Each function's job is explained above it.
 *
 * Passing `npm test -- 14` completes this module.
 */

export interface MenuItem {
  dish: string
  cost: number
}

/**
 * SUBSETS shape, with pruning. Every subset of `menu` whose total cost
 * is <= `budget`.
 *
 * Required optimization: sort `menu` by cost ascending first, and once
 * `runningTotal + nextItem.cost > budget` inside the loop, `break`
 * (not `continue`) — every later item costs at least as much, so the
 * rest of that branch's siblings can't fit either. Without this prune,
 * a large menu explores all 2^n subsets even though almost none fit.
 *
 * @param menu - candidate dishes, each with a non-negative cost.
 * @param budget - maximum total cost, >= 0.
 * @returns every affordable subset (as lists of MenuItem); order doesn't matter.
 * @remarks Edge case: `budget = 0` -> only the empty plan fits (assuming all costs > 0).
 * @example allPlansWithinBudget([{dish:'a',cost:3},{dish:'b',cost:5}], 5)
 *   -> [[], [{dish:'a',cost:3}], [{dish:'b',cost:5}]]
 * Target complexity: exponential worst case (inherent), cut sharply by the sorted-break prune.
 */
export function allPlansWithinBudget(menu: MenuItem[], budget: number): MenuItem[][] {
  throw new Error('TODO: implement me')
}

/**
 * COMBINATION-SUM shape. Every way to pick dishes from `menu` whose
 * costs sum EXACTLY to `target`.
 *
 * @param menu - candidate dishes, each with a positive cost.
 * @param target - exact total cost to hit, > 0.
 * @param allowRepeats - if true, the same dish may be picked more than
 *   once (like unlimited combination sum); if false, each menu item is
 *   used at most once (like a no-reuse combination search).
 * @returns every combination hitting `target` exactly; order doesn't matter.
 * @remarks Edge case: no combination reaches `target` -> `[]`.
 * @example plansHittingExact([{dish:'x',cost:2},{dish:'y',cost:3}], 7, true)
 *   -> [[{dish:'x',cost:2},{dish:'x',cost:2},{dish:'y',cost:3}]]
 * Target complexity: exponential worst case (inherent), pruned via sort + break.
 */
export function plansHittingExact(
  menu: MenuItem[],
  target: number,
  allowRepeats: boolean,
): MenuItem[][] {
  throw new Error('TODO: implement me')
}

/**
 * PERMUTATIONS shape. Every possible serving order for a short tasting
 * menu of unique dish names.
 *
 * @param dishes - up to 8 unique dish names.
 * @returns every ordering, length `dishes.length!`.
 * @remarks Edge case: `dishes = []` -> `[[]]` (one order: none).
 * @example tastingOrders(['soup', 'salad']) -> [['soup','salad'], ['salad','soup']]
 * Target complexity: O(n! * n) time, n = dishes.length (n <= 8, so this stays fast).
 */
export function tastingOrders(dishes: string[]): string[][] {
  throw new Error('TODO: implement me')
}
