    let sales = [90000 , 10000 , 25000];


// let totalSale = 0 ;
// for(let i = 0 ; i < sales.length ; i++){
//     totalSale += sales[i];
// }
// console.log(`Total Sales Using For = ${totalSale}`);

// let totalSales = 0 ;
// for(let i in sales){
//     let index = parseInt(i) + 1 
//     // console.log(`Sales Of Day ${index} = ${totalSales}`);
//     totalSales += sales[i];    
// }
// console.log(`Total Sales Using For In = ${totalSales}`);


// let totalSales = 0;
// for(let sale of sales){
//     totalSales += sale;
// }
// console.log(`Total Sales Using For Of = ${totalSales}`);


totalSales = 0;
let calcSale = (sale) =>{
}
    sales.forEach((Sale,i) => {
        console.log(`Sales of Day ${i+1} = ${Sale}`);
        totalSales += Sale;
})
console.log(`Total Sales Using For Each = ${totalSales}`);


// totalSales = 0;
// let calcSales = (sale) => {

// }
// sales.forEach((sale,i) => {
//     console.log(`Sales of Day ${i+1} = ${sale}`);
//     totalSales += sale;
// })
// console.log(`Total Sales using For Each = ${totalSales}`);
