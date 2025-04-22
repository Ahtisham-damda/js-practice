class Circle{
    constructor(radius){
        this.radius = radius;
    }


    calculateArea(){
        let area = Math.PI * this.radius * this.radius;
        return area;
    }

    calculatePerimeter(){
        const Peri = 2 * Math.PI * this.radius;
        return Peri;
    }
}
let circle = new Circle(5.0);
console.log(`Area Of Circle : ${circle.calculateArea().toFixed(2)}`);
console.log(`Perimeter Of Circle : ${circle.calculatePerimeter().toFixed(2)}`);

