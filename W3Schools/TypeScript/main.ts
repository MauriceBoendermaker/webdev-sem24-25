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