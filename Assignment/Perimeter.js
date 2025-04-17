class rectangle{
    constructor(L,W){
        this.length = L;
        this.width = W;
    }

    display(){
        console.log(`Length : ${this.length}, Width : ${this.width}, Area : ${this.findArea()}, Perimeter : ${this.perimeter()} `);
    }

   findArea(){
    return this.length * this.width ;
   }

   perimeter(){
    return 2 * (this.length+this.width);
   }

   
   
}

// let result1 = new rectangle(10,5)
// let result2 = new rectangle(6,3);
// result1.display();
// result2.display();

let array = [];
let result1 = new rectangle(10,5);
let result2 = new rectangle(6,3);

array.push(result1,result2);
array.forEach(result => result.display());
