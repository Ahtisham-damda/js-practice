let arrays = [10, 20, 40 ,60];
let sum = arrays.reduce((index,curval)=>  index + curval);
console.log(sum);






//Find the Maximum Value using ternary operator
let numbers = [120,220,150,180,300];

let max = numbers.reduce((index,curval)=> index > curval ? index : curval);
console.log(max);



// let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// let count = fruits.reduce((index, fruit) => {
//     index[fruit] = (index[fruit] || 0) + 1;
//     return index;
//   }, {});
  
//   console.log(count);





// Step 1: Create an array of numbers
// let numbers = [120, 220, 150, 180, 300];

// Step 2: Use reduce() to find the maximum number
// let max = numbers.reduce((index, curval) => {
  // index: holds the current highest number (accumulator)
  // curval: the current number in the array during iteration

  // Compare the two values
//   if (index > curval) {
//     return index; // keep the current max (index)
//   } else {
//     return curval; // update max to curval
//   }
// });

// Step 3: Print the result
// console.log("Maximum value is:", max);
