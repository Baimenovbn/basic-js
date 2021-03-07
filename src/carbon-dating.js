const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const HALF_LIFE = 0.693 / HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {
  
  let numSampleActivity = parseFloat(sampleActivity)

  if (typeof sampleActivity !== 'string' || !numSampleActivity || numSampleActivity <= 0 || numSampleActivity > 15) {
    return false
  }

  let unitDecaysToAtoms = MODERN_ACTIVITY / numSampleActivity;
  return Math.ceil(Math.log(unitDecaysToAtoms) / HALF_LIFE)
    
};
