"use strict";
const allNumberRev = (n) => {
    let result = '';
    for (let i = n; i >= 0; i--) {
        result += i + ' ';
    }
    return result.trim();
};
console.log(allNumberRev(5));
//# sourceMappingURL=ex2.js.map