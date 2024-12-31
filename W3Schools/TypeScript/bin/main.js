"use strict";
var SimpleTypes;
(function (SimpleTypes) {
    let firstNameExplicit = "Dylan";
    let firstNameImplicit = "Dylan";
    console.log(typeof firstNameExplicit);
    console.log(typeof firstNameImplicit);
    let firstNameError = "Dylan";
    // firstNameError = 33; // gives an error   
})(SimpleTypes || (SimpleTypes = {}));
//# sourceMappingURL=main.js.map