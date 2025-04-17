class vegetable{
    constructor(Title,Price,Description,Kg){
        this.Title = Title;
        this.Price = Price;
        this.Description = Description;
        this.Kg = Kg;
    }

    display(){
        console.log(`Displaying Info Of ${this.Title}`);
        console.log(`Title : ${this.Title}`);

        let finalprice = this.Price;
        if(this.Price >= 1500){
            finalprice = this.Price * 0.50;
        }
        console.log(`Price : ${finalprice}`);
        console.log(`Description : ${this.Description}`);
        console.log(`Quantity : ${this.Kg}`);
        console.log();
        

        
        
    }
}

let vegetables = [];



        //50% off for those who Buy Vegetables of 1500RS
let vegetable1 = new vegetable("Tomato",250,"Fresh vegetables",10); //per kg 25RS
let vegetable2 = new vegetable("Corn",1800,"Fresh vegetables",12); //per kg 150RS
let vegetable3 = new vegetable("Carrot",1800,"Fresh vegetables",9); //200RS Per kg 
let vegetable4 = new vegetable("Potato",1000,"Fresh vegetables",40); //per kg 25RS

vegetables.push(vegetable1,vegetable2,vegetable3,vegetable4);
vegetables.forEach((vegetable) => vegetable.display());
