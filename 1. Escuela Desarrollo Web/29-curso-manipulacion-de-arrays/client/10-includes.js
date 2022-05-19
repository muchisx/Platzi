// intro

const pets = ['cats', 'dog', 'bat'];

let result = false;
let condition = 'dog';

for (let i = 0; i < pets.length; i++) {
    const item = pets[i];
    if (item === condition) {
        result = true;
        break;
    }
}

result;


// Includes

let result2 = pets.includes('dog');
let result3 = pets.includes('pineapple');
result2;
result3;