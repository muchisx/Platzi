
// ! Arrays

let fruits = ["🍐", "🍎", "🥥", "🍓"];
console.log(fruits);


// .length property gives you the length of a given array

console.log(fruits.length);

// [num] gives you the information contained in the given num index of the array

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// Add or "push" more elemnts to the end of the array and returns the new array length

let pushFruits = fruits.push("🍒", "🥝")
console.log(fruits);
pushFruits;

// remove or "pop" the last element in the array and returns it

let lastFruit = fruits.pop();
console.log(fruits);
lastFruit;

// add or "unshift" more elements at the start of the array and returns the new array length

let unshiftFruits = fruits.unshift("🍍","🥑");
console.log(fruits);
unshiftFruits;

// removes or "shift" the first element in the array and returns it

let shiftFruits = fruits.shift();
console.log(fruits);
shiftFruits;

// returns the index position of a given element in the array

let strawberryIndex = fruits.indexOf("🍓");
strawberryIndex;