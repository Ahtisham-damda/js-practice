class product{
    constructor(title,price,discription,quantity){
        this.title = title;
        this.price = price;
        this.discription = discription;
        this.quantity = quantity;
    }

  display(){
    console.log(`Displaying info of product ${this.title}`);
    console.log(`Title : ${this.title}`);
    console.log(`Price : ${this.price}`);
    console.log(`discription : ${this.discription}`);
    console.log(`Quantity : ${this.quantity}`);


  }
    
}
export default product;