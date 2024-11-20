const allNumber = (n: number) : string => {
    let result = '';

    for (let i = 0; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim();
};

console.log(allNumber(5));