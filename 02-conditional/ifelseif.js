let totalMarks = 360;
let grade = " ";
let percentage = totalMarks*100/500;

console.log(percentage);

if(percentage >= 90){
    grade = "A+";
}else if(percentage >= 80){
    grade = "A";
}else if(percentage >= 70){
    grade = "B+";
}else if(percentage >= 60){
    grade = "B";
} else if(percentage >= 50){
    grade = "C+";
}else if(percentage >= 40){
    grade = "C";
}else{
    grade = "F";
}

console.log(`Your Grade is ${grade}`);

switch(grade){
    case "A+":
        console.log("You Scored Distinction");
        break;
    case "A":
        console.log("You Scored First Class With Distinction");
        break;
    case "B+":
        console.log("You Scored First Class");
        break;
    case "B":
        console.log("You Scored Second Class Upper");
        break;
    case "C+":
        console.log("You Scored Second Class Lower");   
        break;
    case "C":
        console.log("You Scored Third Class");
        break;
    default:
        console.log("You Failed");
        break;
}   
                    
        
        


