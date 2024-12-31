"use strict";
var SimpleTypes;
(function (SimpleTypes) {
    let firstNameExplicit = "Dylan";
    let firstNameImplicit = "Dylan";
    console.log(typeof firstNameExplicit);
    console.log(typeof firstNameImplicit);
    let firstNameError = "Dylan";
    // firstNameError = 33; // error
})(SimpleTypes || (SimpleTypes = {}));
var SpecialTypes;
(function (SpecialTypes) {
    let u = true;
    // u = "string"; // error
    // Math.round(u); // error
    let v = true;
    v = "string"; // no error
    console.log(Math.round(v)); // no error
    let w = 1;
    w = "string"; // no error
    w = {
        runANonExistentMethod: () => {
            console.log("I think therefore I am");
        }
    };
    // w.runANonExistentMethod(); // error
    if (typeof w === 'object' && w !== null) {
        w.runANonExistentMethod();
    }
    // let x: never = true; // error
    let y = undefined;
    let z = null;
})(SpecialTypes || (SpecialTypes = {}));
//# sourceMappingURL=main.js.map