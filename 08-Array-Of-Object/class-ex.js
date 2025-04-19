class car{
    constructor(brand,vehicleName,Model,price){
        this.brand = brand;
        this.Name = vehicleName;
        this.Model = Model;
        this.price = price;
    }

    displayinfo(){
        console.log(`Displaying info of ${this.brand}`);
        console.log(`Brand : ${this.brand}`);
        console.log(`Vehicle Name : ${this.Name}`);
        console.log(`Model : ${this.Model}`);
        console.log(`Price : ${this.price}`);
    }
}

let cars = [];
let car1 = new car("Toyota","Innova Crysta",2024,2900000);
let car2 = new car("Nissan","Terrano",2023,1200000);
let car3 = new car("Suzuki","Ertiga",2024,1700000);
let car4 = new car("Toyota","Fortuner",2024,5000000);
let car5 = new car("MG","Gloster",2024,3200000);
let car6 = new car("Kia","Seltos",2022,1500000);
let car7 = new car("Toyota","Hilux",2024,4500000);
let car8 = new car("Tata","Safari",2024,2400000);

cars.push(car1,car2,car3,car4,car5,car6,car7,car8);

//Displaying All Objects
// cars.forEach(car => car.displayinfo());

    //Displaying Average Price Of An Car
let totalPrice = cars.reduce((total,car) => total += car.price,0);
let AveragePrice = totalPrice / cars.length ;
console.log(`An Average Price Of An Car Is : ${AveragePrice}`);
console.log();
    //Displaying Filtered Output
let filteredCar = cars.filter(car => car.brand == "Toyota");
filteredCar.forEach(car => car.displayinfo());

















// let totalPrice = 0;

// for (let car of cars) {
//   totalPrice += car.price;
// }

// let averagePrice = totalPrice / cars.length;

// console.log("Average Price:", averagePrice);



//  let totalPrice = 0;

// for (let car of cars) {
//   totalPrice += car.price;
// }

// let averagePrice = totalPrice / cars.length;

// console.log("Average Price:", averagePrice);
