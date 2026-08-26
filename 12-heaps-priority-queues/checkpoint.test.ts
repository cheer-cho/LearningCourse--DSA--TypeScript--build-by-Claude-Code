import { describe, expect, it } from 'vitest'
import { TriageQueue, kMostUrgent, type PatientRecord } from './checkpoint'

describe('12/checkpoint — ER triage queue', () => {
  it('serves the highest severity first', () => {
    const q = new TriageQueue()
    q.arrive('Alice', 3, 1)
    q.arrive('Bob', 5, 2)
    q.arrive('Cara', 1, 3)
    expect(q.nextPatient()).toBe('Bob')
    expect(q.nextPatient()).toBe('Alice')
    expect(q.nextPatient()).toBe('Cara')
  })

  it('breaks ties on severity by arrival order (FIFO)', () => {
    const q = new TriageQueue()
    q.arrive('Alice', 5, 10)
    q.arrive('Bob', 5, 5)
    q.arrive('Cara', 5, 20)
    expect(q.nextPatient()).toBe('Bob')
    expect(q.nextPatient()).toBe('Alice')
    expect(q.nextPatient()).toBe('Cara')
  })

  it('tracks waitingCount as patients arrive and are seen', () => {
    const q = new TriageQueue()
    expect(q.waitingCount()).toBe(0)
    q.arrive('Alice', 2, 1)
    q.arrive('Bob', 4, 2)
    expect(q.waitingCount()).toBe(2)
    q.nextPatient()
    expect(q.waitingCount()).toBe(1)
  })

  it('throws when nextPatient is called on an empty queue', () => {
    expect(() => new TriageQueue().nextPatient()).toThrow()
  })

  it('kMostUrgent ranks a fixed batch the same way as the live queue', () => {
    const records: PatientRecord[] = [
      { name: 'Alice', severity: 3, timestamp: 1 },
      { name: 'Bob', severity: 5, timestamp: 2 },
      { name: 'Cara', severity: 5, timestamp: 0 },
      { name: 'Dee', severity: 1, timestamp: 3 },
    ]
    expect(kMostUrgent(records, 2)).toEqual(['Cara', 'Bob'])
  })

  it('kMostUrgent handles k = 0 and k >= records.length', () => {
    const records: PatientRecord[] = [{ name: 'Alice', severity: 1, timestamp: 0 }]
    expect(kMostUrgent(records, 0)).toEqual([])
    expect(kMostUrgent(records, 5)).toEqual(['Alice'])
  })

  it('serves 100_000 patients in the correct priority order', () => {
    const q = new TriageQueue()
    const records: PatientRecord[] = Array.from({ length: 100_000 }, (_, i) => ({
      name: `p${i}`,
      severity: Math.floor(Math.random() * 20),
      timestamp: i,
    }))
    for (const r of records) q.arrive(r.name, r.severity, r.timestamp)

    const expectedOrder = [...records]
      .sort((a, b) => b.severity - a.severity || a.timestamp - b.timestamp)
      .map((r) => r.name)

    const actualOrder: string[] = []
    while (q.waitingCount() > 0) actualOrder.push(q.nextPatient())

    expect(actualOrder).toEqual(expectedOrder)
  })
})
