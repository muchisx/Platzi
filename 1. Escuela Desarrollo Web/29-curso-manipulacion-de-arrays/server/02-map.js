// INTRO

const fruits = ['🍒', '🥥', '🥝', '🍎'];

const newArray = [];

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    newArray.push(element + '++')
}

console.log('original', fruits);
console.log('new', newArray);


// MAP

const newArray2 = fruits.map(item => item + '++');
newArray2;



const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
