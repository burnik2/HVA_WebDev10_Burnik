let ans = document.getElementById("ans");
let double = document.getElementById("double");
let square = document.getElementById("square");
let increment = document.getElementById("increment");

function doubleNumber(num){
    return 2*Number(num);
}
function squareNumber(num){
    return Number(num)*Number(num);
}
function incrementNumber(num){
    return Number(num)+1;
}
function performoperation(num,operation){
    let a = Number(operation(num));
    ans.innerHTML=Number(a);
    // console.log(a);
}
double.addEventListener("click",function(){
    num = document.getElementById("number").value;
    // console.log(document.getElementById("number").value,"Value");
    performoperation(num,doubleNumber);
}) 
square.addEventListener("click",function(){
    num = document.getElementById("number").value;
    performoperation(num,squareNumber);
})
increment.addEventListener("click",function(){
    num = document.getElementById("number").value;
    performoperation(num,incrementNumber);
})