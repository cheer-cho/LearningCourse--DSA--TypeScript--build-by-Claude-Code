import { describe, expect, it } from 'vitest'
import { OrgNode, chainOfCommand, commonManager, headcount, managementDepth, meetingsByLevel } from './checkpoint'

// CEO
// |-- VP-Eng
// |     |-- Engineer-A
// |     `-- Engineer-B
// `-- VP-Sales
//       `-- Rep-C
function buildOrg(): OrgNode {
  const engineerA = new OrgNode('Engineer-A')
  const engineerB = new OrgNode('Engineer-B')
  const vpEng = new OrgNode('VP-Eng', engineerA, engineerB)
  const repC = new OrgNode('Rep-C')
  const vpSales = new OrgNode('VP-Sales', repC, null)
  return new OrgNode('CEO', vpEng, vpSales)
}

describe('checkpoint — headcount', () => {
  it('counts everyone in the org', () => {
    expect(headcount(buildOrg())).toBe(6)
  })

  it('an empty org has 0 headcount', () => {
    expect(headcount(null)).toBe(0)
  })

  it('a lone CEO has headcount 1', () => {
    expect(headcount(new OrgNode('CEO'))).toBe(1)
  })
})

describe('checkpoint — managementDepth', () => {
  it('counts the longest chain of command', () => {
    expect(managementDepth(buildOrg())).toBe(3)
  })

  it('an empty org has depth 0', () => {
    expect(managementDepth(null)).toBe(0)
  })

  it('a lone CEO has depth 1', () => {
    expect(managementDepth(new OrgNode('CEO'))).toBe(1)
  })
})

describe('checkpoint — chainOfCommand', () => {
  it('finds the path down to a leaf report', () => {
    expect(chainOfCommand(buildOrg(), 'Engineer-B')).toEqual(['CEO', 'VP-Eng', 'Engineer-B'])
  })

  it('finds the CEO themselves', () => {
    expect(chainOfCommand(buildOrg(), 'CEO')).toEqual(['CEO'])
  })

  it('returns null for someone not in the org', () => {
    expect(chainOfCommand(buildOrg(), 'Nobody')).toBeNull()
  })

  it('handles an empty org', () => {
    expect(chainOfCommand(null, 'CEO')).toBeNull()
  })
})

describe('checkpoint — meetingsByLevel', () => {
  it('groups names level by level', () => {
    expect(meetingsByLevel(buildOrg())).toEqual([
      ['CEO'],
      ['VP-Eng', 'VP-Sales'],
      ['Engineer-A', 'Engineer-B', 'Rep-C'],
    ])
  })

  it('handles an empty org', () => {
    expect(meetingsByLevel(null)).toEqual([])
  })
})

describe('checkpoint — commonManager', () => {
  it('finds the manager shared by two reports in different branches', () => {
    expect(commonManager(buildOrg(), 'Engineer-A', 'Rep-C')).toBe('CEO')
  })

  it('finds the manager shared by two reports in the same branch', () => {
    expect(commonManager(buildOrg(), 'Engineer-A', 'Engineer-B')).toBe('VP-Eng')
  })

  it("a manager is their own common manager with one of their reports", () => {
    expect(commonManager(buildOrg(), 'VP-Eng', 'Engineer-A')).toBe('VP-Eng')
  })

  it('returns null when either name is missing from the org', () => {
    expect(commonManager(buildOrg(), 'Engineer-A', 'Nobody')).toBeNull()
  })
})
