const allNumberRange = (lower: number, upper: number): string => {
    let result = '';

    for (let i = lower; i <= upper; i++) {
        result += i + ' ';
    }
    return result.trim();
};

console.log(allNumberRange(5, 10))