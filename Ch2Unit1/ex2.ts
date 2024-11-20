const allNumberRev = (n: number) : string => {
    let result = '';
    
    for (let i = n; i >= 0; i--) {
        result += i + ' ';
    }
    return result.trim();
};

console.log(allNumberRev(5))