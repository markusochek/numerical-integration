export function gaussQuadrature(a, b) {
    let couples = []
    let n = 2;
    for (let i = 0; i < n; i++) {
        couples.push(["0", i+1]);
    }

    let terms = []
    for (let i = 0; i < Math.pow(2, n); i++) {
        let binaryNumber = i.toString(2);
        while (binaryNumber.length !== n) {
            binaryNumber = "0" + String(binaryNumber);
        }
        let numberWithoutZeros = "";
        for (let j = 0; j < binaryNumber.length; j++) {
            if (couples[j][binaryNumber[j]] === "0") continue;
            numberWithoutZeros += couples[j][binaryNumber[j]]
        }
        terms.push(numberWithoutZeros)
    }
    console.log(terms)

    let numbers = calculationIntegral(n, b, a);
    console.log(numbers)

    let matrixA = []
    let matrixB = []
    for (const number of numbers) {
        matrixB.push(-number[0])
        matrixA.push([])
        for (let i = 1; i < number.length; i++) {
            matrixA[matrixA.length-1].push(number[i])
        }
    }
    console.log(math.multiply(math.inv(matrixA), matrixB))
}

function calculationIntegral(n, b, a) {
    let coefficients = []
    for (let i = 1; i < n + 1; i++) {
        coefficients.push([]);
        for (let j = i; j < n + i + 1; j++) {
            coefficients[coefficients.length-1].push(Math.pow(b, j) / j - Math.pow(a, j) / j);
        }
        coefficients[coefficients.length-1] = coefficients[coefficients.length-1].reverse()
    }

    return coefficients;

}
