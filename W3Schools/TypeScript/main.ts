namespace SimpleTypes {
    let firstNameExplicit: string = "Dylan";
    let firstNameImplicit = "Dylan";

    console.log(typeof firstNameExplicit);
    console.log(typeof firstNameImplicit);


    let firstNameError: string = "Dylan";
    // firstNameError = 33; // error
}

namespace SpecialTypes {
    let u = true;
    // u = "string"; // error
    // Math.round(u); // error


    let v: any = true;
    v = "string"; // no error
    console.log(Math.round(v)); // no error


    let w: unknown = 1;
    w = "string"; // no error
    w = {
        runANonExistentMethod: () => {
            console.log("I think therefore I am");
        }
    } as { runANonExistentMethod: () => void }
    // w.runANonExistentMethod(); // error
    if (typeof w === 'object' && w !== null) {
        (w as { runANonExistentMethod: Function }).runANonExistentMethod();
    }


    // let x: never = true; // error


    let y: undefined = undefined;
    let z: null = null;
}

namespace Arrays {
    const names: string[] = [];
    names.push("Dylan"); // no error
    // names.push(3); // error


    const namesReadonly: readonly string[] = ["Dylan"];
    // namesReadonly.push("Jack"); // error
    console.log(namesReadonly);


    const numbers = [1, 2, 3];
    numbers.push(4); // no error
    console.log(numbers);
    // numbers.push("2"); // error
    let head: number = numbers[0];
    console.log(head);
}

namespace Tuples {
    let ourTuple: [number, boolean, string];
    ourTuple = [5, false, 'TypeScript is great!'];
    console.log(ourTuple);


    let ourReadonlyTuple: readonly [number, boolean, string];
    ourReadonlyTuple = [5, false, 'TypeScript is amazing!'];
    // ourReadonlyTuple.push('Something else here'); // error
    console.log(ourReadonlyTuple);


    const graph: [x: number, y: number] = [55.2, 41.3];
    const [x, y] = graph;
    console.log(graph);
}

namespace ObjectTypes {
    const car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
    console.log(car);


    car.type = "Ford"; // no error
    // car.type = 2; // error


    const carOptionalProperty: { type: string, milage?: number } = {
        type: "Toyota"
    };
    carOptionalProperty.milage = 2000;
    console.log(carOptionalProperty);


    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Jack = 25; // no error
    // nameAgeMap.Mark = "Fifty"; // error
    console.log(nameAgeMap);
}

namespace Enums {
    enum CardinalDirections_Default {
        North,
        East,
        South,
        West
    }
    let currentDirection = CardinalDirections_Default.North;
    // logs 0
    console.log(currentDirection);
    // currentDirection = 'North'; // error


    enum CardinalDirections_Initialized {
        North = 1,
        East,
        South,
        West
    }
    // logs 1
    console.log(CardinalDirections_Initialized.North);
    // logs 4
    console.log(CardinalDirections_Initialized.West);


    enum StatusCodes_FullyInitialized {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }
    // logs 404
    console.log(StatusCodes_FullyInitialized.NotFound);
    // logs 200
    console.log(StatusCodes_FullyInitialized.Success);


    enum CardinalDirections_String {
        North = "North",
        East = "East",
        South = "South",
        West = "West"
    }
    // logs "North"
    console.log(CardinalDirections_String.North);
    // logs "West"
    console.log(CardinalDirections_String.West);
}

namespace TypeAliases_and_Interfaces {
    type CarYear = number
    type CarType = string
    type CarModel = string
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel
    }

    const carYear: CarYear = 2001
    const carType: CarType = "Toyota"
    const carModel: CarModel = "Corolla"
    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel
    };
    console.log(car);


    interface Rectangle {
        height: number,
        width: number
    }

    const rectangle: Rectangle = {
        height: 20,
        width: 10
    };
    console.log(rectangle);


    interface ColoredRectangle extends Rectangle {
        color: string
    }

    const coloredRectangle: ColoredRectangle = {
        height: 20,
        width: 10,
        color: "red"
    };
    console.log(coloredRectangle);
}

namespace UnionTypes {
    function printStatusCode(code: string | number) {
        console.log(`My status code is ${code}.`)
    }
    printStatusCode(404);
    printStatusCode('200');


    function printStatusCodeError(code: string | number) {
        // console.log(`My status code is ${code.toUpperCase()}.`); // error
        ;
    }
}

namespace Functions {
    // Return Type
    function getTime(): number {
        return new Date().getTime();
    }
    console.log(getTime());

    // Void Return Type
    function printHello(): void {
        console.log("Hello!");
    }
    printHello();

    // Parameters
    function multiply(a: number, b: number) {
        return a * b;
    }
    console.log(multiply(3, 2));

    // Optional Parameters
    function add(a: number, b: number, c?: number) {
        return a + b + (c || 0);
    }
    console.log(add(100, 10, 1));
    console.log(add(5, 10));

    // Default Parameters
    function pow(value: number, exponent: number = 10) {
        return value ** exponent;
    }
    console.log(pow(5, 2));
    console.log(pow(2));

    // Named Parameters
    function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
        return dividend / divisor;
    }
    console.log(divide({ dividend: 10, divisor: 2 }))

    // Rest Parameters
    function addRest(a: number, b: number, ...rest: number[]) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }
    console.log(addRest(10, 10, 2, 2, 3));

    // Type Alias
    type Negate = (value: number) => number;
    const negateFunction: Negate = (value) => value * -1;
    console.log(negateFunction(11));
}

namespace Casting {
    // Casting with as
    let x: unknown = "hello";
    console.log((x as string).length);

    let y: unknown = 4;
    console.log((y as string).length); // undefined

    // console.log((5 as string).length); // error

    // Casting with <>
    let z: unknown = "abcdef";
    console.log((<string>z).length);

    // Force casting
    let x2 = "hello";
    // console.log(((x2 as unknown) as number).length); // error
}