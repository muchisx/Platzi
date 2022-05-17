
// string.replaceAll();

const string = "blabla blabla hey blabla bla laaaaa bla alsdladslada adsad hey"
const replacedString = string.replace("hey", "YOOO");
console.log(replacedString, '    <- replacedString');


// ES12 

const replacedString2 = string.replaceAll("hey", "YOOOOOOOOOOOOOO");
console.log(replacedString2, '    <- replacedString2');



// Private methods prefix #

class Message {
    show(value) {
        console.log(value, '    <- value');
    }
}

const message = new Message();
message.show('Hey')


// ES12

class Message1 {
    #show(value) {
        console.log(value, '    <- value');
    }
}

const message1 = new Message1();
// message1.show('Hey')    // <--- Throws an error because show() is private



// Promise


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));



// Logical Assignment Operator 

// x &&= y
// Only assigns if x is truthy

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 &&= isFalse1);
isTrue1;


// x ||= y
// Only assigns if x is falsy

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);
isTrue2;


// x ??= y
// Only assigns if x is null or undefined

let isUndefined = undefined;
let isFalse3 = false;
console.log(isUndefined ??= isFalse3);
isUndefined;

