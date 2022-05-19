// Intro

const numbers = [1,30,49,29,10,13];

let result;
let condition = 30;

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    if (item === condition) {
        result = item;
        break;
    }
}

result;


// Find

let result2 = numbers.find(item => item === condition);
let result3 = numbers.find(item => item === 2);
result2;
result3;


// Exo

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

let result4 = products.find(item => item.id === '🌭');
result4;


// FindIndex

let result5 = products.findIndex(item => item.id === '🌭')
result5;