// Reference solution — checkpoint 14

export interface MenuItem {
  dish: string
  cost: number
}

/**
 * Pattern: backtracking, subsets shape — a start-index loop over the
 * menu (sorted by cost ascending), recording every path as a valid
 * plan and pruning any branch whose running total already exceeds the
 * budget (sort + break: every later, pricier item would too).
 * Time: exponential worst case, sharply cut by the prune. Space: O(n log n) sort + O(n) recursion.
 */
export function allPlansWithinBudget(menu: MenuItem[], budget: number): MenuItem[][] {
  const sorted = [...menu].sort((a, b) => a.cost - b.cost)
  const results: MenuItem[][] = []
  const path: MenuItem[] = []

  function backtrack(start: number, total: number): void {
    results.push([...path])
    for (let i = start; i < sorted.length; i++) {
      const item = sorted[i]!
      if (total + item.cost > budget) break // sorted ascending: rest are too expensive too
      path.push(item)
      backtrack(i + 1, total + item.cost)
      path.pop()
    }
  }

  backtrack(0, 0)
  return results
}

/**
 * Pattern: backtracking, combination-sum shape — same sort + break
 * prune, plus a `start` index that's `i` (reuse) or `i + 1` (no reuse)
 * depending on `allowRepeats`.
 * Time: exponential worst case, pruned via sort + break. Space: O(target / min cost) recursion.
 */
export function plansHittingExact(
  menu: MenuItem[],
  target: number,
  allowRepeats: boolean,
): MenuItem[][] {
  const sorted = [...menu].sort((a, b) => a.cost - b.cost)
  const results: MenuItem[][] = []
  const path: MenuItem[] = []

  function backtrack(start: number, remaining: number): void {
    if (remaining === 0) {
      results.push([...path])
      return
    }
    for (let i = start; i < sorted.length; i++) {
      const item = sorted[i]!
      if (item.cost > remaining) break
      path.push(item)
      backtrack(allowRepeats ? i : i + 1, remaining - item.cost)
      path.pop()
    }
  }

  backtrack(0, target)
  return results
}

/**
 * Pattern: backtracking, permutations shape — a `used` boolean array
 * over dish indices, since order is exactly what's being generated.
 * Time: O(n! * n). Space: O(n).
 */
export function tastingOrders(dishes: string[]): string[][] {
  const results: string[][] = []
  const path: string[] = []
  const used: boolean[] = new Array(dishes.length).fill(false)

  function backtrack(): void {
    if (path.length === dishes.length) {
      results.push([...path])
      return
    }
    for (let i = 0; i < dishes.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(dishes[i]!)
      backtrack()
      path.pop()
      used[i] = false
    }
  }

  backtrack()
  return results
}
