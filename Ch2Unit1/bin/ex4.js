"use strict";
const allNumberRangeRev = (lower, upper) => {
    let result = '';
    for (let i = upper; i >= lower; i--) {
        result += i + ' ';
    }
    return result.trim();
};
console.log(allNumberRangeRev(4, 12));
//# sourceMappingURL=ex4.js.map