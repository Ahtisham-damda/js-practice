
// dont know concept


let calcAndPrintFactorial = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;  // fact = 6
    }
    printFactorial(n,fact);
}

let printFactorial = (n, fact) => {
    console.log(`Factorial of ${n} = ${fact}`);
}

let n = 4;
calcAndPrintFactorial(n);