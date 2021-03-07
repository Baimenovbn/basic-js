const CustomError = require("../extensions/custom-error");

const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer',
                 'summer', 'summer', 'fall', 'fall', 'fall', 'winter']

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const month = date.getMonth()
  const isDateType = Object.prototype.toString.call(date) === '[object Date]'

  if (month > 11 || month < 0 || !isDateType) {
    throw new Error()
  }

  return seasons[month]
};