class product{
    constructor(Brand,Name,Varient,Price){
        this.Brand = Brand;
        this.VehicleName = Name;
        this.Varient = Varient;
        this.Price = Price; 
    }

    display(){
        console.log(`Displaying info Of Brand ${this.Brand}`);
        console.log(`Brand : ${this.Brand}`);
        console.log(`Vehicle Name : ${this.VehicleName}`);
        console.log(`Varient : ${this.Varient}`);
        console.log(`Price : ${this.Price}`);
        console.log();


        
    }

}

let products = [];
let product1 = new product("Toyota","Fortuner","Petrol",4800000);
let product2 = new product("Suzuki","Brezza","Diesel",1800000);
let product3 = new product("Kia","Carnival","Petrol",5200000);
let product4 = new product("MG","Hector","Diesel",2700000);
let product5 = new product("Tata","Harrier","Petrol",2500000);

products.push(product1,product2,product3,product4,product5);
products.forEach(product => product.display());
