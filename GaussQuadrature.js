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

    for (let i = 0; i < n; i++) {
        calculationIntegral(n, b);
    }
}

function calculationIntegral(n, x) {
    for (let i = 1; i < n + 1; i++) {
        console.log(Math.pow(x, i) / i);
    }
}
