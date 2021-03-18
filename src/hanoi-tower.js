const CustomError = require("../extensions/custom-error");
const HOURS_TO_SECONDS = 3600

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) + - 1
  let seconds = Math.floor(turns / (turnsSpeed / HOURS_TO_SECONDS))
  
  return { turns, seconds }
};
