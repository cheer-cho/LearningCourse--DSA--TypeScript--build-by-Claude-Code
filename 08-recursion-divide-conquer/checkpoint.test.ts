import { describe, expect, it } from 'vitest'
import { findPath, largestFile, maxTreeDepth, totalSize, type Tree } from './checkpoint'

const tree: Tree = {
  name: 'root',
  size: 0,
  children: [
    { name: 'readme.md', size: 12 },
    {
      name: 'src',
      size: 0,
      children: [
        { name: 'index.ts', size: 340 },
        { name: 'utils.ts', size: 128 },
        {
          name: 'lib',
          size: 0,
          children: [
            { name: 'big.ts', size: 900 },
            { name: 'small.ts', size: 40 },
          ],
        },
      ],
    },
    {
      name: 'docs',
      size: 0,
      children: [{ name: 'guide.md', size: 500 }],
    },
  ],
}

describe('checkpoint 8 — totalSize', () => {
  it('sums a single file', () => {
    expect(totalSize({ name: 'a.txt', size: 5 })).toBe(5)
  })

  it('sums every node across the whole tree', () => {
    expect(totalSize(tree)).toBe(12 + 340 + 128 + 900 + 40 + 500)
  })

  it('handles an empty directory', () => {
    expect(totalSize({ name: 'empty', size: 0, children: [] })).toBe(0)
  })
})

describe('checkpoint 8 — maxTreeDepth', () => {
  it('a single file has depth 1', () => {
    expect(maxTreeDepth({ name: 'a.txt', size: 5 })).toBe(1)
  })

  it('measures the deepest branch, not the first', () => {
    expect(maxTreeDepth(tree)).toBe(4) // root -> src -> lib -> big.ts
  })

  it('treats an empty children array as a leaf', () => {
    expect(maxTreeDepth({ name: 'empty', size: 0, children: [] })).toBe(1)
  })
})

describe('checkpoint 8 — findPath', () => {
  it('finds the root itself', () => {
    expect(findPath(tree, 'root')).toEqual(['root'])
  })

  it('finds a shallow file', () => {
    expect(findPath(tree, 'readme.md')).toEqual(['root', 'readme.md'])
  })

  it('finds a deeply nested file', () => {
    expect(findPath(tree, 'big.ts')).toEqual(['root', 'src', 'lib', 'big.ts'])
  })

  it('returns null when the name is not present', () => {
    expect(findPath(tree, 'nonexistent.ts')).toBeNull()
  })
})

describe('checkpoint 8 — largestFile', () => {
  it('a single file is its own largest file', () => {
    expect(largestFile({ name: 'a.txt', size: 5 })).toEqual({ name: 'a.txt', size: 5 })
  })

  it('finds the largest file across the whole tree, ignoring directory sizes', () => {
    expect(largestFile(tree)).toEqual({ name: 'big.ts', size: 900 })
  })
})

describe('checkpoint 8 — deep tree (recursion depth)', () => {
  // A single-branch chain, depth chosen conservatively: comfortably
  // below where plain recursion risks overflowing Node's default call
  // stack (module 06's LESSON documents that boundary sits somewhere
  // in the low thousands to ~10,000 frames depending on frame size).
  // 2,000 is deep enough to prove these functions handle real nesting,
  // while staying safely inside ordinary recursion's budget — the
  // "language-safe recursion" option from this checkpoint's brief.
  // Pathologically deeper trees would call for ex06's explicit-stack
  // technique instead.
  const DEEP_CHAIN_DEPTH = 2000

  function buildChain(depth: number): Tree {
    let node: Tree = { name: `file-${depth}`, size: 42 }
    for (let level = depth - 1; level >= 0; level--) {
      node = { name: `dir-${level}`, size: 0, children: [node] }
    }
    return node
  }

  const deepTree = buildChain(DEEP_CHAIN_DEPTH)

  it('totalSize handles a deep chain', () => {
    expect(totalSize(deepTree)).toBe(42)
  })

  it('maxTreeDepth handles a deep chain', () => {
    expect(maxTreeDepth(deepTree)).toBe(DEEP_CHAIN_DEPTH + 1)
  })

  it('findPath handles a deep chain', () => {
    const path = findPath(deepTree, `file-${DEEP_CHAIN_DEPTH}`)
    expect(path).not.toBeNull()
    expect(path).toHaveLength(DEEP_CHAIN_DEPTH + 1)
    expect(path?.at(-1)).toBe(`file-${DEEP_CHAIN_DEPTH}`)
  })

  it('largestFile handles a deep chain (only one leaf exists)', () => {
    expect(largestFile(deepTree)).toEqual({ name: `file-${DEEP_CHAIN_DEPTH}`, size: 42 })
  })
})
