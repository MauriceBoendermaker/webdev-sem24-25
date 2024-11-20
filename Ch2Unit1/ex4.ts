const allNumberRangeRev = (lower: number, upper: number): string => {
    let result = '';

    for (let i = upper; i >= lower; i--) {
        result += i + ' ';
    }
    return result.trim();
}

console.log(allNumberRangeRev(4, 12))