const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++
        break
      case '--discard-prev':
        if (arr[i - 2] === '--discard-next') break;
        answer.pop()
        break
      case '--double-next':
        let next = arr[i + 1]
        next !== undefined ? answer.push(next) : ''
        break
      case '--double-prev':
        if (arr[i - 2] === '--discard-next') break;
        let prev = arr[i - 1]
        prev !== undefined ? answer.push(prev) : ''
        break
      default:
        answer.push(arr[i]);
    }
  }

  return answer
  
};
