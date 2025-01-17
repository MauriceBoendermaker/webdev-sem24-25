namespace Conditionals {
    const stringify: <T>(_: T) => string = <T>(x: T): string => String(x)
    console.log(stringify(5))

    const stringify2 = <T>(x: T): string => String(x)
    console.log(stringify2(15))
}

namespace Recursion {
    const getDivisors = (n: number) => (i: number): string => {
        if (i > n)
            return ""
        else
            if (n % i == 0)
                return i + " " + (getDivisors(n)(i + 1))
            else
                return getDivisors(n)(i + 1)
    }
    console.log(getDivisors(1028)(1))
}