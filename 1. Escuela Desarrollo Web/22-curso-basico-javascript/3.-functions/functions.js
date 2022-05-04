// ! Functions

function myFunction() {
    console.log("I'm a declarative Function!");
}
myFunction(); // Start the function


var myOtherFunction = function () {
    console.log("I'm an Expressive function!");
}
myOtherFunction;
myOtherFunction();



// ! Functon Parameters

function sayHelloTo(name) {
    console.log("Hello " + name);
}

sayHelloTo();   // Without paremeter it returns undefined
sayHelloTo("Miguel"); // Using the paremeter works as intended



// ! Using return

function returnSomething(a,b) {
    let result = a + b;
    console.log(result);
    return result;
}

returnSomething(); // It will not work with parameters, returning NaN
returnSomething(1,2); // returns 3 normally
console.log(returnSomething(1,2)); // we can see visually here the returned value


// Global and Local Scope
// Here we will use a variable that lives in the global scope and combine it with a
// variable that is only in the local scope of the tellMyAge function
// Note: by being a locally scoped variable we can locally "redeclare" the variable
// MyName that we had used globally before

const myAge = "25";

function tellMyAge() {
    let myName = "Miguel"
    console.log(`${myName}, ${myAge} y/o`);
}
tellMyAge();
console.log(myName);
// See how myName still has the old global value and not the locally declared value above