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
var TypeAliases_and_Interfaces;
(function (TypeAliases_and_Interfaces) {
    const carYear = 2001;
    const carType = "Toyota";
    const carModel = "Corolla";
    const car = {
        year: carYear,
        type: carType,
        model: carModel
    };
    console.log(car);
    const rectangle = {
        height: 20,
        width: 10
    };
    console.log(rectangle);
    const coloredRectangle = {
        height: 20,
        width: 10,
        color: "red"
    };
    console.log(coloredRectangle);
})(TypeAliases_and_Interfaces || (TypeAliases_and_Interfaces = {}));
var UnionTypes;
(function (UnionTypes) {
    function printStatusCode(code) {
        console.log(`My status code is ${code}.`);
    }
    printStatusCode(404);
    printStatusCode('200');
    function printStatusCodeError(code) {
        // console.log(`My status code is ${code.toUpperCase()}.`); // error
        ;
    }
})(UnionTypes || (UnionTypes = {}));
var Functions;
(function (Functions) {
    // Return Type
    function getTime() {
        return new Date().getTime();
    }
    console.log(getTime());
    // Void Return Type
    function printHello() {
        console.log("Hello!");
    }
    printHello();
    // Parameters
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(3, 2));
    // Optional Parameters
    function add(a, b, c) {
        return a + b + (c || 0);
    }
    console.log(add(100, 10, 1));
    console.log(add(5, 10));
    // Default Parameters
    function pow(value, exponent = 10) {
        return value ** exponent;
    }
    console.log(pow(5, 2));
    console.log(pow(2));
    // Named Parameters
    function divide({ dividend, divisor }) {
        return dividend / divisor;
    }
    console.log(divide({ dividend: 10, divisor: 2 }));
    // Rest Parameters
    function addRest(a, b, ...rest) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }
    console.log(addRest(10, 10, 2, 2, 3));
    const negateFunction = (value) => value * -1;
    console.log(negateFunction(11));
})(Functions || (Functions = {}));
var Casting;
(function (Casting) {
    // Casting with as
    let x = "hello";
    console.log(x.length);
    let y = 4;
    console.log(y.length); // undefined
    // console.log((5 as string).length); // error
    // Casting with <>
    let z = "abcdef";
    console.log(z.length);
    // Force casting
    let x2 = "hello";
    // console.log(((x2 as unknown) as number).length); // error
})(Casting || (Casting = {}));
var Classes;
(function (Classes) {
    // Members: Types
    class PersonTypes {
        constructor() {
            this.name = "";
        }
    }
    const personTypes = new PersonTypes();
    personTypes.name = "Jane";
    console.log(personTypes);
    // Members: Visibility
    class PersonVisibility {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    const personVisibility = new PersonVisibility("Jane");
    console.log(personVisibility.getName());
    // Parameter Properties
    class PersonProperties {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    const personProperties = new PersonProperties("Jane");
    console.log(personProperties.getName());
    // Readonly
    class PersonReadonly {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    const personReadonly = new PersonReadonly("Jane");
    console.log(personReadonly.getName());
    // Abstract Classes
    class Polygon {
        toString() {
            return `Polygon[area=${this.getArea()}]`;
        }
    }
    class Rectangle extends Polygon {
        constructor(width, height) {
            super(); // part of abstract class Polygon
            this.width = width;
            this.height = height;
        }
        getArea() {
            return this.width * this.height;
        }
        // Override
        toString() {
            return `Rectangle[width=${this.width}, height=${this.height}]`;
        }
    }
    const myRectangle = new Rectangle(10, 20);
    console.log(myRectangle.getArea());
    // Inheritance: Extends
    class Square extends Rectangle {
        constructor(width) {
            super(width, width);
        }
        // Override
        toString() {
            return `Square[width=${this.width}]`;
        }
    }
    const mySquare = new Square(20);
    console.log(mySquare.getArea());
    // Override
    console.log(myRectangle.toString());
    console.log(mySquare.toString());
})(Classes || (Classes = {}));
var BasicGenerics;
(function (BasicGenerics) {
    // Functions
    function createPair(v1, v2) {
        return [v1, v2];
    }
    console.log(createPair('Hello', 42));
    // Classes
    class NamedValue {
        constructor(name) {
            this.name = name;
        }
        setValue(value) {
            this._value = value;
        }
        getValue() {
            return this._value;
        }
        toString() {
            return `${this.name}: ${this._value}`;
        }
    }
    let value = new NamedValue('myNumber');
    value.setValue(10);
    console.log(value.toString());
    const wrappedValue = { value: 10 };
    console.log(wrappedValue);
    ;
    const wrappedInterface = { value: 20 };
    console.log(wrappedInterface);
    // Default Value
    class NamedDefaultValue {
        constructor(name) {
            this.name = name;
        }
        setValue(value) {
            this._value = value;
        }
        getValue() {
            return this._value;
        }
        toString() {
            return `${this.name}: ${this._value}`;
        }
    }
    let defaultValue = new NamedDefaultValue('myNumber');
    defaultValue.setValue('myValue');
    console.log(defaultValue.toString());
    // Extends
    function createLoggedPair(v1, v2) {
        console.log(`creating pair: v1='${v1}', '${v2}'`);
        return [v1, v2];
    }
    console.log(createLoggedPair(4, 5));
})(BasicGenerics || (BasicGenerics = {}));
var UtilityTypes;
(function (UtilityTypes) {
    let pointPart = {};
    pointPart.x = 10;
    console.log(pointPart);
    let myCar = {
        make: "Ford",
        model: "Focus",
        milage: 12000
    };
    console.log(myCar);
    // Record
    const nameAgeMap = {
        'Alice': 21,
        'Bob': 25
    };
    console.log(nameAgeMap);
    const bobOmit = {
        name: 'Bob'
    };
    console.log(bobOmit);
    const bobPick = {
        name: 'Bob',
        location: 'Rotterdam'
    };
    console.log(bobPick);
    const valueExclude = true;
    console.log(valueExclude);
    const pointGenerator = {
        x: 10,
        y: 20
    };
    console.log(pointGenerator);
    const pointPrinter = {
        x: 20,
        y: 40,
    };
    console.log(pointPrinter);
    const personReadonly = {
        name: "Dylan",
        age: 35
    };
    // personReadonly.name = 'Bob'; // error
    console.log(personReadonly.name, personReadonly.age);
})(UtilityTypes || (UtilityTypes = {}));
var Keyof;
(function (Keyof) {
    function printPersonProperty(person, property) {
        console.log(`Printing person property ${property}: "${person[property]}"`);
    }
    let person = {
        name: "Max",
        age: 27
    };
    printPersonProperty(person, "name");
    function createStringPair(property, value) {
        return { [property]: value };
    }
    console.log(createStringPair("Name", "Bob"));
})(Keyof || (Keyof = {}));
var Null;
(function (Null) {
    // Types
    let value = null;
    console.log(typeof value);
    value = "Hello";
    console.log(typeof value);
    value = undefined;
    console.log(typeof value);
    function printYardSize(house) {
        const yardSize = house.yard?.sqft;
        if (yardSize === undefined) {
            console.log('No yard');
        }
        else {
            console.log(`Yard is ${yardSize} sqft`);
        }
    }
    let home = {
        sqft: 500,
        yard: {
            sqft: 400
        }
    };
    printYardSize(home);
    // Nullish Coalescence
    function printMilage(milage) {
        console.log(`Milage: ${milage ?? 'Not Available'}`);
    }
    printMilage(null);
    printMilage(undefined);
    printMilage(0);
    // Null Assertion
    function getValueNullAssert() {
        return 'Hello';
    }
    let valueNullAssert = getValueNullAssert();
    console.log('value length: ' + valueNullAssert.length);
    // Array bounds handling
    let arrayNumbers = [1, 2, 3];
    let arrayValue = arrayNumbers[0];
    console.log(arrayValue); // with `noUncheckedIndexedAccess` this has the type `number | undefined`
    console.log(typeof arrayValue);
})(Null || (Null = {}));
//# sourceMappingURL=main.js.map