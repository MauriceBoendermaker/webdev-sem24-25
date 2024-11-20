"use strict";
const allNumberRange = (lower, upper) => {
    let result = '';
    for (let i = lower; i <= upper; i++) {
        result += i + ' ';
    }
    return result.trim();
};
console.log(allNumberRange(5, 10));
//# sourceMappingURL=ex3.js.map