let ans = document.getElementById("ans");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");
function addNumbers(num1,num2){
    return num1+num2;
}
function multiplyNumbers(num1,num2){
    return num1*num2;
}
function subtractNumbers(num1,num2){
    return num1-num2;
}
function divideNumbers(num1,num2){
    if(num2==0){
        return "error";
    }
    else{
        return num1/num2;
    }
}
function performArithmetic(num1,num2,operation){
    return operation(num1,num2);
}
console.log(performArithmetic(5,3,addNumbers));
console.log(performArithmetic(5,3,multiplyNumbers));
console.log(performArithmetic(5,3,subtractNumbers));
console.log(performArithmetic(5,3,divideNumbers));