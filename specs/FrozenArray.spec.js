import assert from 'assert'
import FrozenArray from '../src/FrozenArray'

const frozenArray = FrozenArray([1, 2, 3])
const head = frozenArray.head()
const tail = frozenArray.tail()

describe('A FrozenArray', () => {
  it('should have a lenght of 1 ', () => {
    assert.equal(head.length, 1)
  })

  it('should  not be an array', () => {
    assert.equal(Array.isArray(tail), false)
  })

  it('should tail to legnth of 2 ', () => {
    assert.equal(tail.length, 2)
  })

  it('fold head should return the falue of the first index', () => {
    assert.equal(tail.foldh(), 2)
  })

  it('should nth', () => {
    assert.equal(tail.nth(1), 3)
  })

  it('should have a length of 3', () => {
    assert.equal(frozenArray.length, 3)
  })

  it('should foldh ', () => {
    assert.equal(head.foldh(x => x), 1)
    assert.equal(frozenArray.foldh(x => x * 2), 2)
  })

  it('should  ', () => {
    assert.equal(frozenArray.inspect(), 'FrozenArray([1,2,3])')
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).every(x => x < 4), true)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).filter(x => x < 2).length, 1)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).includes(2), true)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).indexOf(2), 1)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3, 3, 3, 3]).lastIndexOf(3), 5)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).inspect(), 'FrozenArray([1,2,3])')
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).join(), '1,2,3')
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).map(x => x * 2).inspect(), 'FrozenArray([2,4,6])')
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).some(x => x === 3), true)
  })

  it('should  ', () => {
    assert.equal(FrozenArray.of([1, 2, 3]).slice(0)(1).inspect(), 'FrozenArray([1])')
  })

  it('should  ', () => {
    assert.equal(frozenArray.concat([5]).length, 4)
  })
})
