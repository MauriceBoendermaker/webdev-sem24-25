const allEvenRange = (lower: number, upper: number) => {
    let result = '';
    let numbers = [];

    for (let i = 0; i <= upper; i++) {
        numbers.push(i);
    }

    numbers.forEach(function (value) {
        console.log(value);
    });

    // return result.trim();

    return console.log(numbers);
}

console.log(allEvenRange(1, 12))