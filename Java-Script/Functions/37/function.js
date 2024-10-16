
let square = document.getElementById("square");
let addition = document.getElementById("addition");
let ans = document.getElementById("ans");
let cal = document.getElementById("calculate");
let f = 1;
function callbackFunction(n){
    console.log(n);
}
function squarenum(n){
    ans.innerHTML= n*n;
    // console.log(n*n);
}
function addnum(n1,n2){
    ans.innerHTML=Number(n1)+Number(n2);
    // console.log(n1+n2);
}
function higherOrderFunction(num,callback){
    callback(num);
}
function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2);
}

square.addEventListener("click",function(){
    document.getElementById("number2").style.display='none';
    f=0;
})
addition.addEventListener("click",function(){
    document.getElementById("number1").style.display='block';
    document.getElementById("number2").style.display='block';
    f=1;
})
cal.addEventListener("click",function(){
    if(f==0){
        number1 = document.getElementById("number1").value;
        higherOrderFunction(number1,squarenum);
    }
    else{
        number1 = document.getElementById("number1").value;
        number2 = document.getElementById("number2").value;
        newHigherOrderFunction(number1,number2,addnum);
    }
})
// higherOrderFunction(5,callbackFunction);



