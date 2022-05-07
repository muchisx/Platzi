// ! Hoisting

// Notice how the variable declaration exists after running code even if its called after the assigniment
// This is because variable declarations are hoisted = elevated during compilation and interpreted first

a = 2;
var a;
console.log(`a: ${a}`);

// Notice how b is undefined because only the declarative portion of the variable
// is being hoisted
// Which means var b is assigned to memory and hoisted = elevated
// but its assigment "= 2" is still following the flow of the code and not being hoisted

console.log(`b: ${b}`);
var b = 2;

// --

// Notice how even if the function call comes first in the flow of the code, JS is able to 
// know what the function is and interpret the arguments passed

// This is because function declarations are also hoisted and elevated into memory before running
// the code

nameOfDog('Elmo');

function nameOfDog(name) {
    console.log(`name: ${name}`);
}


