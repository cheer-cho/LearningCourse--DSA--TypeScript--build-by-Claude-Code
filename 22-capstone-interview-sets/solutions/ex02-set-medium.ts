// solutions/ex02-set-medium.ts — reference solutions for ex02

/**
 * longestFreshSequence
 * Pattern: variable-size sliding window + frequency map (module 05).
 * Expand right pointer freely; when distinct keys in window exceed k,
 * shrink from the left until the invariant is restored.
 * Tracking maxLen at each step gives the answer in one pass.
 * Time O(n), Space O(k) — at most k+1 keys in the map at once.
 */
export function longestFreshSequence(log: string[], k: number): number {
  if (log.length === 0 || k === 0) return 0

  const freq = new Map<string, number>()
  let left = 0
  let maxLen = 0

  for (let right = 0; right < log.length; right++) {
    const song = log[right]!
    freq.set(song, (freq.get(song) ?? 0) + 1)

    // Shrink window from left until we have at most k distinct songs
    while (freq.size > k) {
      const leftSong = log[left]!
      const count = freq.get(leftSong)!
      if (count === 1) {
        freq.delete(leftSong)
      } else {
        freq.set(leftSong, count - 1)
      }
      left++
    }

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

/**
 * smallestSerial
 * Pattern: monotonic (non-decreasing) stack of digits (module 06).
 * Greedy: a digit that is larger than its successor should be deleted
 * first — pop while the stack's top exceeds the incoming digit and
 * deletions remain. Leftover deletions trim the (non-decreasing) tail.
 * Each digit is pushed and popped at most once.
 * Time O(n), Space O(n).
 */
export function smallestSerial(serial: string, k: number): string {
  const stack: string[] = []
  let remaining = k

  for (const digit of serial) {
    while (remaining > 0 && stack.length > 0 && stack[stack.length - 1]! > digit) {
      stack.pop()
      remaining--
    }
    stack.push(digit)
  }

  // Digits were non-decreasing: delete from the end.
  while (remaining > 0) {
    stack.pop()
    remaining--
  }

  const result = stack.join('').replace(/^0+/, '')
  return result === '' ? '0' : result
}

// A generic MinHeap<T> is PROVIDED in the exercise file (do not edit) —
// same push/pop/peek logic as module 12's MinHeap, generalized with a
// comparator so it can heap any type in any order.
// ---- provided — do not edit --------------------------------------------
class MinHeap<T> {
  private heap: T[] = []
  constructor(private readonly compare: (a: T, b: T) => number) {}

  push(val: T): void {
    this.heap.push(val)
    this.siftUp(this.heap.length - 1)
  }

  pop(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.pop: heap is empty')
    const top = this.heap[0]!
    const last = this.heap.pop()!
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.siftDown(0)
    }
    return top
  }

  peek(): T {
    if (this.heap.length === 0) throw new Error('MinHeap.peek: heap is empty')
    return this.heap[0]!
  }

  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private siftUp(index: number): void {
    let i = index
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (this.compare(this.heap[parent]!, this.heap[i]!) <= 0) break
      this.swap(i, parent)
      i = parent
    }
  }

  private siftDown(index: number): void {
    let i = index
    const n = this.heap.length
    while (true) {
      const left = 2 * i + 1
      const right = 2 * i + 2
      let top = i
      if (left < n && this.compare(this.heap[left]!, this.heap[top]!) < 0) top = left
      if (right < n && this.compare(this.heap[right]!, this.heap[top]!) < 0) top = right
      if (top === i) break
      this.swap(i, top)
      i = top
    }
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i]!
    this.heap[i] = this.heap[j]!
    this.heap[j] = tmp
  }
}
// -------------------------------------------------------------------------

/**
 * topKFrequentWords
 * Pattern: top-K by frequency, size-k min-heap (module 12). Count with
 * a Map, then keep a min-heap of at most k [word, count] entries,
 * ordered so the WORST of the current top-k — lowest count, then
 * alphabetically last on a tie — sits at the top and is evicted first
 * when size exceeds k. Popping the heap yields worst-to-best order, so
 * reversing gives the required best-first (count desc, alpha asc)
 * output. Time O(n log k) — O(n) to count, O(n log k) to maintain the
 * heap; Space O(n) for the frequency map.
 */
export function topKFrequentWords(words: string[], k: number): string[] {
  const freq = new Map<string, number>()
  for (const word of words) {
    freq.set(word, (freq.get(word) ?? 0) + 1)
  }

  type Entry = [word: string, count: number]
  const heap = new MinHeap<Entry>((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1] // lower count = worse = smaller
    return a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0 // alpha-later = worse = smaller
  })

  for (const entry of freq) {
    heap.push(entry)
    if (heap.size() > k) heap.pop()
  }

  const result: Entry[] = []
  while (!heap.isEmpty()) result.push(heap.pop())
  result.reverse() // worst-to-best -> best-to-first (count desc, alpha asc)
  return result.map(([word]) => word)
}

/**
 * longestPipelineChain
 * Pattern: topological sort (Kahn's BFS, module 16) + DP over the DAG.
 * chainLen[v] = longest chain ending at v. Process nodes in topological
 * order (in-degree 0 first, head-pointer queue for O(1) dequeue); when
 * relaxing edge u→v, chainLen[v] = max(chainLen[v], chainLen[u] + 1).
 * Fewer processed nodes than taskCount means a cycle → -1.
 * Time O(V + E), Space O(V + E).
 */
export function longestPipelineChain(
  taskCount: number,
  deps: [number, number][],
): number {
  if (taskCount === 0) return 0

  const adj: number[][] = Array.from({ length: taskCount }, () => [])
  const inDegree = new Array<number>(taskCount).fill(0)
  for (const [task, runsAfter] of deps) {
    adj[runsAfter]!.push(task)
    inDegree[task]!++
  }

  const queue: number[] = []
  for (let i = 0; i < taskCount; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }

  const chainLen = new Array<number>(taskCount).fill(1)
  let processed = 0
  let best = 0
  let head = 0

  while (head < queue.length) {
    const node = queue[head++]!
    processed++
    best = Math.max(best, chainLen[node]!)
    for (const next of adj[node]!) {
      chainLen[next] = Math.max(chainLen[next]!, chainLen[node]! + 1)
      if (--inDegree[next]! === 0) queue.push(next)
    }
  }

  return processed === taskCount ? best : -1
}

/**
 * minFestivalCost
 * Pattern: 1-D dynamic programming, three rolling states (module 18).
 * bestRed/bestGold/bestTeal = cheapest way to decorate stalls 0..i with
 * stall i in that color. Each new stall's color must differ from the
 * previous stall's, so each state adds min of the OTHER two states.
 * Time O(n), Space O(1).
 */
export function minFestivalCost(costs: [number, number, number][]): number {
  let bestRed = 0
  let bestGold = 0
  let bestTeal = 0

  for (const [red, gold, teal] of costs) {
    const nextRed = red + Math.min(bestGold, bestTeal)
    const nextGold = gold + Math.min(bestRed, bestTeal)
    const nextTeal = teal + Math.min(bestRed, bestGold)
    bestRed = nextRed
    bestGold = nextGold
    bestTeal = nextTeal
  }

  return Math.min(bestRed, bestGold, bestTeal)
}

/**
 * allBracketLayouts
 * Pattern: backtracking with pruning (module 14).
 * Track open/close counts: place '(' while open < n, place ')' while
 * close < open. Both rules prune invalid branches before they start,
 * so every leaf reached is a valid layout — no post-filtering.
 * Time O(C(n) * n) output-sensitive, Space O(n) recursion depth.
 */
export function allBracketLayouts(n: number): string[] {
  const result: string[] = []

  function backtrack(current: string, open: number, close: number): void {
    if (current.length === 2 * n) {
      result.push(current)
      return
    }
    if (open < n) backtrack(`${current}(`, open + 1, close)
    if (close < open) backtrack(`${current})`, open, close + 1)
  }

  backtrack('', 0, 0)
  return result
}
