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

namespace Classes {
    // Members: Types
    class PersonTypes {
        name: string = "";
    }
    const personTypes = new PersonTypes();
    personTypes.name = "Jane";
    console.log(personTypes);

    // Members: Visibility
    class PersonVisibility {
        private name: string;

        public constructor(name: string) {
            this.name = name;
        }

        public getName(): string {
            return this.name;
        }
    }
    const personVisibility = new PersonVisibility("Jane");
    console.log(personVisibility.getName());

    // Parameter Properties
    class PersonProperties {
        public constructor(private name: string) { }

        public getName(): string {
            return this.name;
        }
    }
    const personProperties = new PersonProperties("Jane");
    console.log(personProperties.getName());

    // Readonly
    class PersonReadonly {
        private readonly name: string;

        public constructor(name: string) {
            this.name = name;
        }

        public getName(): string {
            return this.name;
        }
    }
    const personReadonly = new PersonReadonly("Jane");
    console.log(personReadonly.getName());

    // Abstract Classes
    abstract class Polygon {
        public abstract getArea(): number;

        public toString(): string {
            return `Polygon[area=${this.getArea()}]`;
        }
    }

    // Inheritance: Implements
    interface Shape {
        getArea: () => number;
    }

    class Rectangle extends Polygon implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {
            super(); // part of abstract class Polygon
        }

        public getArea(): number {
            return this.width * this.height;
        }

        // Override
        public toString(): string {
            return `Rectangle[width=${this.width}, height=${this.height}]`;
        }
    }
    const myRectangle = new Rectangle(10, 20);
    console.log(myRectangle.getArea());

    // Inheritance: Extends
    class Square extends Rectangle {
        public constructor(width: number) {
            super(width, width);
        }

        // Override
        public override toString(): string {
            return `Square[width=${this.width}]`;
        }
    }
    const mySquare = new Square(20);
    console.log(mySquare.getArea());

    // Override
    console.log(myRectangle.toString());
    console.log(mySquare.toString());
}

namespace BasicGenerics {
    // Functions
    function createPair<S, T>(v1: S, v2: T): [S, T] {
        return [v1, v2];
    }
    console.log(createPair<string, number>('Hello', 42));

    // Classes
    class NamedValue<T> {
        private _value: T | undefined;

        constructor(private name: string) { }

        public setValue(value: T) {
            this._value = value;
        }

        public getValue(): T | undefined {
            return this._value;
        }

        public toString(): string {
            return `${this.name}: ${this._value}`;
        }
    }
    let value = new NamedValue<number>('myNumber');
    value.setValue(10);
    console.log(value.toString());

    // Type Aliases
    type WrappedType<T> = { value: T };
    const wrappedValue: WrappedType<number> = { value: 10 };
    console.log(wrappedValue);

    interface WrappedInterface<T> { value: T };
    const wrappedInterface: WrappedInterface<number> = { value: 20 };
    console.log(wrappedInterface);

    // Default Value
    class NamedDefaultValue<T = string> {
        private _value: T | undefined;

        constructor(private name: string) { }

        public setValue(value: T) {
            this._value = value;
        }

        public getValue(): T | undefined {
            return this._value;
        }

        public toString(): string {
            return `${this.name}: ${this._value}`;
        }
    }
    let defaultValue = new NamedDefaultValue('myNumber');
    defaultValue.setValue('myValue');
    console.log(defaultValue.toString());

    // Extends
    function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
        console.log(`creating pair: v1='${v1}', '${v2}'`);
        return [v1, v2];
    }
    console.log(createLoggedPair(4, 5));
}

namespace UtilityTypes {
    // Partial
    interface Point {
        x: number,
        y: number
    }
    let pointPart: Partial<Point> = {};
    pointPart.x = 10;
    console.log(pointPart);

    // Required
    interface Car {
        make: string;
        model: string;
        milage?: number;
    }

    let myCar: Required<Car> = {
        make: "Ford",
        model: "Focus",
        milage: 12000
    };
    console.log(myCar);

    // Record
    const nameAgeMap: Record<string, number> = {
        'Alice': 21,
        'Bob': 25
    };
    console.log(nameAgeMap);

    // Omit
    interface PersonOmit {
        name: string;
        age: number;
        location?: string;
    }

    const bobOmit: Omit<PersonOmit, 'age' | 'location'> = {
        name: 'Bob'
    };
    console.log(bobOmit);

    // Pick
    interface PersonPick {
        name: string;
        age: number;
        location?: string;
    }

    const bobPick: Pick<PersonPick, 'name' | 'location'> = {
        name: 'Bob',
        location: 'Rotterdam'
    };
    console.log(bobPick);

    // Exclude
    type Primitive = string | number | boolean;
    const valueExclude: Exclude<Primitive, string> = true;
    console.log(valueExclude);

    // ReturnType
    type PointGenerator = () => { x: number; y: number; };
    const pointGenerator: ReturnType<PointGenerator> = {
        x: 10,
        y: 20
    };
    console.log(pointGenerator);

    // Parameters
    type PointPrinter = (p: { x: number; y: number; }) => void;
    const pointPrinter: Parameters<PointPrinter>[0] = {
        x: 20,
        y: 40,
    };
    console.log(pointPrinter);

    // Readonly
    interface PersonReadonly {
        name: string;
        age: number
    }
    const personReadonly: Readonly<PersonReadonly> = {
        name: "Dylan",
        age: 35
    };
    // personReadonly.name = 'Bob'; // error
    console.log(personReadonly.name, personReadonly.age)
}

namespace Keyof {
    // keyof with explicit keys
    interface Person {
        name: string;
        age: number;
    }

    function printPersonProperty(person: Person, property: keyof Person) {
        console.log(`Printing person property ${property}: "${person[property]}"`);
    }
    let person = {
        name: "Max",
        age: 27
    };
    printPersonProperty(person, "name");

    // keyof with index signatures
    type StringMap = { [key: string]: unknown };
    function createStringPair(property: keyof StringMap, value: string): StringMap {
        return { [property]: value };
    }
    console.log(createStringPair("Name", "Bob"));
}

namespace Null {
    // Types
    let value: string | undefined | null = null;
    console.log(typeof value);

    value = "Hello";
    console.log(typeof value);

    value = undefined;
    console.log(typeof value);

    // Optional Chaining
    interface House {
        sqft: number;
        yard?: {
            sqft: number;
        };
    }

    function printYardSize(house: House) {
        const yardSize = house.yard?.sqft;

        if (yardSize === undefined) {
            console.log('No yard');
        } else {
            console.log(`Yard is ${yardSize} sqft`);
        }
    }

    let home: House = {
        sqft: 500,
        yard: {
            sqft: 400
        }
    };
    printYardSize(home);

    // Nullish Coalescence
    function printMilage(milage: number | null | undefined) {
        console.log(`Milage: ${milage ?? 'Not Available'}`);
    }
    printMilage(null);
    printMilage(undefined);
    printMilage(0);

    // Null Assertion
    function getValueNullAssert(): string | undefined {
        return 'Hello';
    }
    let valueNullAssert = getValueNullAssert();
    console.log('value length: ' + valueNullAssert!.length);

    // Array bounds handling
    let arrayNumbers: number[] = [1, 2, 3];
    let arrayValue = arrayNumbers[0];
    console.log(arrayValue); // with `noUncheckedIndexedAccess` this has the type `number | undefined`
    console.log(typeof arrayValue);
}