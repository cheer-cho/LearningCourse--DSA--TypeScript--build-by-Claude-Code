// Reference solution — ex02
// Pattern: parent forest with path compression (find re-points every
// visited node straight at the root) and union by rank (the shorter
// tree attaches under the taller one's root). Either optimization alone
// gives near-O(1) amortized operations; together the bound is
// O(alpha(n)) per op, alpha(n) <= 4 for any realistic n.
// Time: O(alpha(n)) amortized per op, Space: O(n)

export class UnionFind {
  private readonly parent: number[]
  private readonly rank: number[]
  private count: number

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.rank = new Array(n).fill(0)
    this.count = n
  }

  find(x: number): number {
    if (x < 0 || x >= this.parent.length) {
      throw new Error(`UnionFind.find: ${x} is out of range`)
    }
    let root = x
    while (this.parent[root] !== root) root = this.parent[root]!
    // Path compression: re-point every node on the walked path at root.
    let cur = x
    while (this.parent[cur] !== root) {
      const next = this.parent[cur]!
      this.parent[cur] = root
      cur = next
    }
    return root
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) return false

    // Union by rank: attach the shorter tree under the taller one.
    if (this.rank[rootX]! < this.rank[rootY]!) {
      this.parent[rootX] = rootY
    } else if (this.rank[rootX]! > this.rank[rootY]!) {
      this.parent[rootY] = rootX
    } else {
      this.parent[rootY] = rootX
      this.rank[rootX]!++
    }
    this.count--
    return true
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y)
  }

  componentCount(): number {
    return this.count
  }
}
