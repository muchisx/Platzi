
// Array Method - Flat

let array = [1,2,3, [1,2,3, [1,2,3]]];


array.flat(1);
array.flat(Infinity);


// Array Method - FlatMap

let arrayMap = [1,2,3,4,5,6]

arrayMap.flatMap((value) => [value, value * 2])


// Method - Trims

let hello = '               Hello';
hello.trimStart();

let hello2 = 'helloww                 ';
hello2.trimEnd();


// Optionnal catch binding 

try {

}
catch (error) {
    error
}


// ES10

try {

}
catch {
    error
}


// Methods - fromEntries

let entries = [["name", "oscar"], ["age",32]];
Object.fromEntries(entries)


// Symbol description

let mySymbol = 'My Symbolwwwwww';
let symbol = Symbol(mySymbol);
symbol.description;