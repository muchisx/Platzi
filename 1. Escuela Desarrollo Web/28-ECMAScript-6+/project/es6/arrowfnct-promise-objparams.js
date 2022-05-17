// Arrow Functions, Promesas y Parámetros en objetos

// Parámetros en objetos

let name1 = 'muchisx';
let age1 = 32;

let obj = {
    name: name1,
    age: age1,
}
console.log(obj, '    <- obj');

// ES6

let obj2 = { name1, age1 }
console.log(obj2, '    <- obj2');


// Arrow Functions

const names = [
    {name: 'Muchisx', age: 15},
    {name: 'pepe', age: 12},
]

let listOfNames = names.map(function(item) {
    console.log(item.name, '    <- item');
}) 

// ES6

let listOfNames2 = names.map(item => console.log(item.name, '    <- item.name'));


const listOfNames3 = (name, age, country) => {
    console.log(age, '    <- age');
}
listOfNames3('pepe',2,'CO')


const listOfNames4 = country => {
    console.log(country, '    <- country');
}
listOfNames4('US')


const square = num => num * num;
console.log(square(3), '    <- square(2)');



// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve(console.log('    <- Resolved!'));
        } else {
            reject(console.log('    <- Rejected'));
        }
    });
}

helloPromise()
    .then(response => console.log(response, '    <- response'))
    .then(() => console.log('    <- hey'))
    .catch(error => console.log(error,'     <- error'));