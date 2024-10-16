// a. Define and Initialize the Array
const fruits = ["apple", "banana", "cherry", "date"];

// b. Iterate and Log Using forEach()
console.log("Using forEach function expression:");
fruits.forEach(function (fruit) {
  console.log(fruit.toUpperCase());
});

console.log("Using forEach arrow function:");
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

// c. Calculate Total Characters Using forEach()
let totalCharacters = 0;
fruits.forEach(function (fruit) {
  totalCharacters += fruit.length;
});
console.log("Total characters:", totalCharacters);

// d. Iterate and Create a New Modified Array Using map()
console.log("Using map function expression:");
const reversedFruits = fruits.map(function (fruit) {
  return fruit.split("").reverse().join("");
});
console.log(reversedFruits);

console.log("Using map arrow function:");
reversedFruits = fruits.map((fruit) => {
  return fruit.split("").reverse().join("");
});
console.log(reversedFruits);

// e. Iterate and Create a New Filtered Array Using filter()
console.log("Using filter function expression:");
const longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longFruits);

console.log("Using filter arrow function:");
longFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});
console.log(longFruits);

// f. Create a New Filtered and Modified Array using filter() and map()
console.log("Using filter and map function expressions:");
const aFruitsUpper = fruits
  .filter(function (fruit) {
    return fruit.includes("a");
  })
  .map(function (fruit) {
    return fruit.toUpperCase();
  });
console.log(aFruitsUpper);