const CustomError = require("../extensions/custom-error");


module.exports = function repeater(str, {
  repeatTimes = 1, 
  separator = '+', 
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
} = {}) {
  
  let added = []
  let formattedAddition = String(addition);
  let formattedString = String(str)
  
  for (let i = 1; i <= additionRepeatTimes; i++) {
    added.push(formattedAddition)
  }
  
  let repeated = []
  for (let i = 1; i <= repeatTimes; i++) {
    repeated.push(formattedString + added.join(additionSeparator))
  }


  return repeated.join(separator)
};
