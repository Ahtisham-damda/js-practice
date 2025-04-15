// Ternary operator assignment

let numbers = [10, 13, 0, -4, -5];

// numbers.forEach((num) =>{
//     let condition = num>0 ? "Positive" : (num<0 ? "Negative" : "Zero");

//     let modules = num % 2 == 0 ? "Even" : "Odd";

//     console.log(`${num} is ${condition} And ${modules}`);

// })

let result = numbers.reduce((index,num) => {
    let sign = num > 0 ? "Positive" :  ( num < 0 ? "Negative" : "Zero");

    let parity = num%2==0 ? "Even" : "Odd" 
    index.push(`${num} is ${sign} and ${parity}`);
    return index;
},[]);
// console.log(result);


result.forEach(result=> console.log(result));

