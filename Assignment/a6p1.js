class product{
    constructor(name,price,stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    display(){
        console.log(`Displaying Info Of Product ${this.name}`);
        console.log(`Name : ${this.name}`);
        console.log(`Price : ${this.price}`);
        console.log(`Stock : ${this.stock}`);
        console.log();
        
        
        
        
        
    }
}

let products = [];
let product1 = new product("Iphone 16 Pro Max",125000,11);
let product2 = new product("Iphone 15 Pro Plus",90000,8);
let product3 = new product("Iphone 14 Pro",85000,15);
let product4 = new product("Iphone 14", 60000,6);
let product5 = new product("Iphone 13 Pro Max",55000,13);
let product6 = new product("Iphone 12 Pro Max",30000,16);
let product7 = new product("Iphone 11 Pro",15000,8);

products.push(product1,product2,product3,product4,product5,product6,product7);
// products.forEach(product => product.display());


// Filter and display products with stock >= 10
let filteredStock = products.filter(product => product.stock >= 10);
console.log("Filtered Products With Stock >= 10:\n");
filteredStock.forEach(product => product.display());

// Update product price increased by 15%
console.log("Updated Prices After 15% Increase:\n");

products.forEach(product =>{
    let oldPrice = product.price;
    product.price = oldPrice * 1.15;
    console.log(`${product.name}: ₹${oldPrice.toFixed(2)} → ₹${product.price.toFixed(2)}`);
    
});


//Printing Original products
console.log("🔸 Original Products:");
products.forEach(product => product.display());