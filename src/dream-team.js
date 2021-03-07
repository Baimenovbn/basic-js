const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) {
    return false
  }

  let teamName = '';

  for (let name of members) {
    if (typeof name !== 'string') {
      continue
    }

    teamName += name.trim()[0].toUpperCase()
  }

  return teamName.split('').sort().join('')
};
