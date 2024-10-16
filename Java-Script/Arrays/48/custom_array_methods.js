// a. forEachArray Function
function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  // b. mapArray Function
  function mapArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i], i, array));
    }
    return newArray;
  }
  
  // c. filterArray Function
  function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  // Example usage
  const fruits = ["apple", "banana", "cherry", "date"];
  
  forEachArray(fruits, (fruit) => {
    console.log(fruit.toUpperCase());
  });
  
  const reversedFruits = mapArray(fruits, (fruit) => {
    return fruit.split("").reverse().join("");
  });
  console.log(reversedFruits);
  
  const longFruits = filterArray(fruits, (fruit) => {
    return fruit.length > 5;
  });
  console.log(longFruits);