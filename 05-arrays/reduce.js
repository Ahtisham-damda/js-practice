let arrays = [10, 20, 40 ,60];
let sum = arrays.reduce((index,curval)=>  index + curval);
console.log(sum);






//Find the Maximum Value using ternary operator
let numbers = [120,220,150,180,300];

let max = numbers.reduce((index,curval)=> index > curval ? index : curval);
console.log(max);



let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let count = fruits.reduce((index, fruit) => {
    index[fruit] = (index[fruit] || 0) + 1;
    return index;
  }, {});
  
  console.log(count);
