import {expect} from 'chai'
import gthubFollowNames from '.'

describe('gthub-follow-names', () => {
  it('should have a list of all available names', () => {
    expect(gthubFollowNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(gthubFollowNames.random()).to.satisfy(isIncludedIn(gthubFollowNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
