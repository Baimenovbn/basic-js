const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    
    this.currentChain.push((value === undefined ? '' : value));
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || 
        position.toString().split('.').length > 1 || 
        typeof position !== 'number')  {
          this.currentChain = [];
          throw Error();
        };
    
    this.currentChain = [...this.currentChain.filter((_, i) => position !== i + 1)]
    return this
  },
  reverseChain() {
    this.currentChain = this.currentChain.reverse()
    return this
  },
  finishChain() {
    const finishedChain = this.currentChain.map(val => `( ${val} )`).join('~~')
    this.currentChain = []
    return finishedChain
  }
};


module.exports = chainMaker;
