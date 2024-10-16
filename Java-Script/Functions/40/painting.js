const costPerUnit = 2;
function areaOfRectangle(length,width){
    return length*width;
}
function areaOfCircle(radius){
    return Math.PI *radius*radius;
}

function areaOfTriangle(base,height){
    return 0.5*base*height;
}
function calculatePaintingCost(dimension1,dimension2,calculateArea){
    let area = calculateArea(dimension1,dimension2);
    return costPerUnit*area;
}
console.log(calculatePaintingCost(5,10,areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6,8,areaOfTriangle));