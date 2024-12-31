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
var ObjectTypes;
(function (ObjectTypes) {
    const car = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
    console.log(car);
    car.type = "Ford"; // no error
    // car.type = 2; // error
    const carOptionalProperty = {
        type: "Toyota"
    };
    carOptionalProperty.milage = 2000;
    console.log(carOptionalProperty);
    const nameAgeMap = {};
    nameAgeMap.Jack = 25; // no error
    // nameAgeMap.Mark = "Fifty"; // error
    console.log(nameAgeMap);
})(ObjectTypes || (ObjectTypes = {}));
var Enums;
(function (Enums) {
    let CardinalDirections_Default;
    (function (CardinalDirections_Default) {
        CardinalDirections_Default[CardinalDirections_Default["North"] = 0] = "North";
        CardinalDirections_Default[CardinalDirections_Default["East"] = 1] = "East";
        CardinalDirections_Default[CardinalDirections_Default["South"] = 2] = "South";
        CardinalDirections_Default[CardinalDirections_Default["West"] = 3] = "West";
    })(CardinalDirections_Default || (CardinalDirections_Default = {}));
    let currentDirection = CardinalDirections_Default.North;
    // logs 0
    console.log(currentDirection);
    // currentDirection = 'North'; // error
    let CardinalDirections_Initialized;
    (function (CardinalDirections_Initialized) {
        CardinalDirections_Initialized[CardinalDirections_Initialized["North"] = 1] = "North";
        CardinalDirections_Initialized[CardinalDirections_Initialized["East"] = 2] = "East";
        CardinalDirections_Initialized[CardinalDirections_Initialized["South"] = 3] = "South";
        CardinalDirections_Initialized[CardinalDirections_Initialized["West"] = 4] = "West";
    })(CardinalDirections_Initialized || (CardinalDirections_Initialized = {}));
    // logs 1
    console.log(CardinalDirections_Initialized.North);
    // logs 4
    console.log(CardinalDirections_Initialized.West);
    let StatusCodes_FullyInitialized;
    (function (StatusCodes_FullyInitialized) {
        StatusCodes_FullyInitialized[StatusCodes_FullyInitialized["NotFound"] = 404] = "NotFound";
        StatusCodes_FullyInitialized[StatusCodes_FullyInitialized["Success"] = 200] = "Success";
        StatusCodes_FullyInitialized[StatusCodes_FullyInitialized["Accepted"] = 202] = "Accepted";
        StatusCodes_FullyInitialized[StatusCodes_FullyInitialized["BadRequest"] = 400] = "BadRequest";
    })(StatusCodes_FullyInitialized || (StatusCodes_FullyInitialized = {}));
    // logs 404
    console.log(StatusCodes_FullyInitialized.NotFound);
    // logs 200
    console.log(StatusCodes_FullyInitialized.Success);
    let CardinalDirections_String;
    (function (CardinalDirections_String) {
        CardinalDirections_String["North"] = "North";
        CardinalDirections_String["East"] = "East";
        CardinalDirections_String["South"] = "South";
        CardinalDirections_String["West"] = "West";
    })(CardinalDirections_String || (CardinalDirections_String = {}));
    // logs "North"
    console.log(CardinalDirections_String.North);
    // logs "West"
    console.log(CardinalDirections_String.West);
})(Enums || (Enums = {}));
//# sourceMappingURL=main.js.map