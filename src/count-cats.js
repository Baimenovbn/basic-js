const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    return backyard.reduce((sum, row) => {
        return sum + row.reduce((prev, current) => current === '^^' ? 
                                                    prev + 1 : prev, 0)
    }, 0)
};
