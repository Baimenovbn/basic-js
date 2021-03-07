const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let bindedCalculateDepth = this.calculateDepth.bind(this)
    return 1 + (Array.isArray(arr) ? arr.reduce(function(max, subArr) {
      return Math.max(max, bindedCalculateDepth(subArr));
    }, 0) : -1);
  }
};