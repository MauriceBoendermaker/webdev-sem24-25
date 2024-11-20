"use strict";
/* Opdracht: */
// van let naar const
// 1 parameter accepteren
// geen for loops
// type BinaryFunction = (a: number, b: number) => number; // Put lambda function in a generic type
// const arr: number[] = [1, 2, 3]; // Define array of numbers
// // Uiteindelijke functie voor de opdracht zonder loops
// const Reduce = (f: BinaryFunction) => {
//     const Inner = (arr: number[]): number => arr.length <= 0 ? 0 : arr.length = 1 ? arr[0] : f(arr[0], Inner(arr.slice(1)));
//     return Inner;
// }
// console.log(Reduce((a,b)=>a+b) (arr))
// // Herschreven function die maar 1 parameter accepteerd en een functie returned
// function MyReduce(f: BinaryFunction) {
//     return function (arr: number[]): number {
//         if (arr.length <= 0) return 0;
//         let acc = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             acc = f(acc, arr[i]);
//         }
//         return acc;
//     }
// }
// console.log(MyReduce((a, b) => a + b)(arr));
// const sum = MyReduce((a, b) => a + b);
// const product = MyReduce((a, b) => a * b);
// const Max = MyReduce((a, b) => a >= b ? a : b);
// const Min = MyReduce((a, b) => a <= b ? a : b);
// sum(arr)
// // Eerste functie herschreven met lambda
// function ReduceLambda(fxy: (x: number, y: number) => number, arr: number[]): number {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let R: number = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         R = fxy(R, arr[i]);
//     }
//     return R;
// }
// console.log(ReduceLambda((x, y) => x + y, arr));
// // Eerste oefen functie om in TypeScript getallen uit een array op te tellen
// function sumUp(arr: number[]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumUp(arr));
// -----------------
// [1, 2, 3, 4, 5] => 15 sum
// function Reduce(arr:number[], fxy:(a: number, b: number) => number):number {
//     if(arr.length < 0) return 0;
//     let result = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         result = fxy(result , arr[i]);
//         // result = result * arr[i];
//     }
//     return result;
// }
// console.log(Reduce([1, 2, 3, 4, 5], (a,b)=>a+b))
// 
function Reduce1(fxy) {
    return function (arr) {
        if (arr.length < 0)
            return 0;
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = fxy(result, arr[i]);
            // result = result * arr[i];
        }
        return result;
    };
}
// console.log(Reduce1((a,b)=>a*b)([1, 2, 3, 4, 5]))
const sum = Reduce1((a, b) => a + b);
const product = Reduce1((a, b) => a * b);
const Max = Reduce1((a, b) => a > b ? a : b);
//
function Reduce3(arr) {
    return function (fxy) {
        if (arr.length < 0)
            return 0;
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = fxy(result, arr[i]);
            // result = result * arr[i];
        }
        return result;
    };
}
// console.log(Reduce1((a,b)=>a*b)([1, 2, 3, 4, 5]))
//# sourceMappingURL=main.js.map