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
