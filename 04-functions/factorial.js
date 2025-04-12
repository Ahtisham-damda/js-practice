// Factorial of 4 = 1 x 2 x 3 x 4 = 24
let n = 4;
let fact = 1;
for(let i = 1; i <= n; i++) {
    fact = fact * i;  // fact = 6
}
console.log(`Factorial of ${n} = ${fact}`);