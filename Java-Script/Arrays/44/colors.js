
const colors = ["red", "green", "blue"];
console.log(colors[0]);


colors[1] = "yellow";
console.log(colors[1]);
colors.push("purple");
console.log(colors[colors.length - 1]);


console.log("For loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("While loop:");
let j = 0;
while (j < colors.length) {
  console.log(colors[j]);
  j++;
}

console.log("For...of loop:");
for (const color of colors) {
  console.log(color);
}


console.log(typeof colors);
console.log(colors.length);


colors.push("orange");
console.log(colors.length);
console.log(colors.pop());
console.log(colors.indexOf("blue"));


colors.owner = "Your Name";
console.log(colors);

console.log("For...in loop:");
for (const property in colors) {
  console.log(`${property}: ${colors[property]}`);
}