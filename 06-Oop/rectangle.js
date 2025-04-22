class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }


    calculateArea(){
        let area = this.length * this.width;
        return area;
    }

    // calculatePerimeter(){
    //     const Peri = 2 * Math.PI * this.radius;
    //     return Peri;
    // }
}
let rectangle = new Rectangle(5,6);
console.log(`Area Of Circle : ${rectangle.calculateArea()}`);

