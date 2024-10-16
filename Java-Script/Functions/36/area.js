let button = document.getElementById("button");
let length;
let width;
let area;
function calculate() {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    if (length > -1 && width > -1) {
        area = length * width;
    }
    else{
        area="error";
    }
    document.getElementById("print").innerHTML = area;
}
button.addEventListener("click", calculate);