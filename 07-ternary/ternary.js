// Ternary Operator
let n = 10;
let result = n % 2 == 0 ? "Even" : "Odd";
console.log(result);

let age = 21;
let eligiblity = age >= 18 ? "Eligible to vote" : "Not eligiblel to vote";
console.log(eligiblity);

let userName = "Aeraf";
let displayName = userName == "" ? "Guest" : userName;
console.log(displayName);

let percent = 85;
let grade = percent >= 80 ? "A"
            : percent >= 60 ? "B"
            : percent >= 40 ? "C"
            : "FAIL";
console.log(grade);