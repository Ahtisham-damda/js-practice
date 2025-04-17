class triangle{
    base ;
    height;

    constructor(b,h){
        this.base = b;
        this.height=h;
    }

 

    FindArea(){
        return 0.5*this.base*this.height;
    }

    printResult(){
        console.log(`Base of Triangle : ${this.base}`);
    console.log(`Height of Triangle : ${this.height}`);
    }

    }



let result1 = new triangle(20,10);
result1.FindArea();
result1.printResult();



// class Triangle {

//     base;
//     height; 

//     constructor(b, h) {
//         this.base = b;
//         this.height = h;
//     }

//     findArea() {
//         return 0.5 * this.base * this.height;
//     }

//     printResult() {
//         console.log(`Base of Triangle: ${this.base}`);
//         console.log(`Height of Triangle: ${this.height}`);
//         console.log(`Area of Triangle: ${this.findArea()}`);
//     }
// }

// let result = new Triangle(20,10);
// result.printResult();


