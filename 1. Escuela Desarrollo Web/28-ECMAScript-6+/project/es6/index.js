

// Default Params y Concatenación


// Default Params

function newFunction(name, age, country) {
    var name = name || 'Muchix';
    var age = age || 32;
    var country = country || 'US'
    console.log(name, age, country, '    <- name, age, country');
}

newFunction();

// ES 6

function newFunction2(name = "Muchisx", age = 32, country = "US") {
    console.log(name, age, country, '    <- name, age, country');
}

newFunction2();
newFunction2("Miguel", 15, "CO");



// Concatenación, Multilínea

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."
  console.log(lorem);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem2);

// LET y CONST, Spread Operator y Desestructuración

// Desestructuración

let person = {
    name: 'oscar',
    age: 32,
    country: 'CO'
}

console.log(person.name, person.age, '    <- person.name, person.age');

let { name, age, country} = person;
console.log(name, age, country, '    <- name, age, country');

// Spread Operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jess', 'Camila'];

let jointteams = ['David', ...team1, ...team2];
console.log(jointteams, '    <- jointteams');

// LET y CONST Seen in other courses



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