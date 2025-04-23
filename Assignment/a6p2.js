class student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    display(){
        console.log(`displaying Marks of ${this.name}`);
        console.log(`Name : ${this.name}`);
        console.log(`Marks : ${this.marks}`);
        console.log();
        
    }
}

let students = [];
let student1 = new student("Ahtisham",35);
let student2 = new student("Fayaz",90);
let student3 = new student("Rabay",55);
let student4 = new student("Kaif",59);
let student5 = new student("Ehab",70);
let student6 = new student("Vaseel",65);

students.push(student1,student2,student3,student4,student5,student6);
//Original Array
students.forEach(student => student.display());

//Displaying marks of students who scored more than 60.
console.log(`Student Who Scored More Than 60`);
let filteredMark = students.filter(student => student.marks >= 60);
filteredMark.forEach(student => student.display());

//Calculating Average Marks of students

let TotalMarks = students.reduce((total,student)=> total += student.marks,0);
let AverageMarks = TotalMarks / students.length;

console.log(`An Average Marks Of Total Students : ${AverageMarks}`);


