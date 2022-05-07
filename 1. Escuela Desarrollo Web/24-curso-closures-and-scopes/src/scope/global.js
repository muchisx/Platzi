

// Scope


// Exo 1 

var hello = 'Hello';
console.log('hello: ' , hello);

let world = 'Hello World';
console.log('world: ' , world);

const helloWorld = 'Hello World!';
console.log('helloWorld: ' , helloWorld);



const anotherFunction = () => {
    console.log('hello: ' , hello);
    console.log('world: ' , world);
    console.log('helloWorld: ' , helloWorld);
}

anotherFunction();


// Exo 2

const showBadVariableOne = () => {
    badVariableOne = "I'm bad and global even insde a function because i didnt use var let or const and now they can see me after function init."
}

showBadVariableOne();

console.log('badVariableOne: ' , badVariableOne);

// Exo 3

const showBadVariableTwo = () => {
    var badVariableTwo = badVariableOne = "I'm bad and global even insde a function because i didnt use var let or const and now they can see me after function init.";
}

showBadVariableTwo();
console.log('badVariableTwo: ' , badVariableOne);