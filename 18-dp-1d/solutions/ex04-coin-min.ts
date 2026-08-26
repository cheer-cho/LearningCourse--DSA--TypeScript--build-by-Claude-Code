// Reference solution — ex04

// State: fewest(a) = minimum coins to make amount a.
// Choice: which coin to use last, out of every reusable denomination.
// Recurrence: fewest(a) = 1 + min(fewest(a - coin)) over valid coins.
// Base case: fewest(0) = 0; everything else starts at +Infinity so an
// unreached amount never masquerades as "free" or "already optimal."
// Order: bottom-up, ascending amount (a - coin is always smaller than
// a, so it's always already filled in). O(amount * coins.length) time,
// O(amount) space.
export function minCoins(coins: number[], amount: number): number {
  const fewest = new Array<number>(amount + 1).fill(Infinity)
  fewest[0] = 0

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a && fewest[a - coin]! + 1 < fewest[a]!) {
        fewest[a] = fewest[a - coin]! + 1
      }
    }
  }

  return fewest[amount] === Infinity ? -1 : fewest[amount]!
}
