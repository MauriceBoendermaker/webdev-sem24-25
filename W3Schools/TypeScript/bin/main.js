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
var Arrays;
(function (Arrays) {
    const names = [];
    names.push("Dylan"); // no error
    // names.push(3); // error
    const namesReadonly = ["Dylan"];
    // namesReadonly.push("Jack"); // error
    console.log(namesReadonly);
    const numbers = [1, 2, 3];
    numbers.push(4); // no error
    console.log(numbers);
    // numbers.push("2"); // error
    let head = numbers[0];
    console.log(head);
})(Arrays || (Arrays = {}));
var Tuples;
(function (Tuples) {
    let ourTuple;
    ourTuple = [5, false, 'TypeScript is great!'];
    console.log(ourTuple);
    let ourReadonlyTuple;
    ourReadonlyTuple = [5, false, 'TypeScript is amazing!'];
    // ourReadonlyTuple.push('Something else here'); // error
    console.log(ourReadonlyTuple);
    const graph = [55.2, 41.3];
    const [x, y] = graph;
    console.log(graph);
})(Tuples || (Tuples = {}));
//# sourceMappingURL=main.js.map