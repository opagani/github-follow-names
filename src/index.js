import uniqueRandomArray from 'unique-random-array'
const githubFollowNames = require('./github-follow-names.json')

const mainExport = {
  all: githubFollowNames,
  random: uniqueRandomArray(githubFollowNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
