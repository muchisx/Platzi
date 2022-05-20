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
    console.log(name, age, '    <- name, age, country');
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




