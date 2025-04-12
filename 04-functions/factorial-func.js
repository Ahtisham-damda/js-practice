function calcFactorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;  // fact = 6
    }
    console.log(`Factorial of ${n} = ${fact}`);
}
calcFactorial(4);
calcFactorial(8);
calcFactorial(10);