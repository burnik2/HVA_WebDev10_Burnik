let button=document.getElementById("button");
// console.log(button);
 function greet(){
     let n = document.getElementById("name");
     n=n.value;
     if(n=="")
     {
         n="Guest";
     }
     n="Welcome " + n + " !!!"
    //  return(n);
     window.alert(n);
    // document.getElementById("welcome").innerHTML = n;
}
button.addEventListener("click",greet);