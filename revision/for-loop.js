let sales = [10000 , 32000, 21000];
// let totalsales = 0 ;
// for(let i = 0 ; i < sales.length ; i++){
// let index = i+1;
// totalsales += sales[i];
// console.log(`Day ${index} = ${totalsales}`);
// }


//For In Loop

// let totalSales = 0 ;
// for(let i in sales){
//     let index = parseInt(i)+1;
//     totalSales += sales[i];
//     console.log(`Sale of day ${index} = ${totalSales}`)
// }




//For OF Loop

// let totalsales = 0;
// let index = 0
// for(let sale of sales){
//      index++;
//     totalsales += sale;
//     console.log(`Sales of day ${index} = ${totalsales}`);
// }





// ForEach Loop

let totalSales = 0; 
sales.forEach(sale =>  totalSales += sale  )
console.log(`${totalSales}`)