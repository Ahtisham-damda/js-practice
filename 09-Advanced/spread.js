//spread operator

//spread operator for arrays
let fruit1 = ["Apple","Banana"];
let fruit2 = ["Mango","Orange"];

let fruits = [...fruit1,...fruit2];
console.log(fruits);



//spread operator for object
let user  ={
    name : "Ahtisham",
    Age  : 21
}

let userprofile = {
    profession : "Cs Student",
    Qualification : "Bca Graduate"
}

let UserObject = {
    ...user,
    ...userprofile
}
console.log(UserObject);

