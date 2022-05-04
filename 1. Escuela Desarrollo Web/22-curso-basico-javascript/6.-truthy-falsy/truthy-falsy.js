

// ! Truthy & Falsy

console.log(Boolean());
// Default Boolean Method value is false

console.log(Boolean(0));
// 0 in binary means false too

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// Every null, undefined and NaN are false

console.log(Boolean(false));
// Boolean false also returns false

console.log(Boolean(""));
// Empty strings are false

console.log(Boolean("     "));
// whitespaces count as characters so they make a string true

console.log(Boolean("hey"));
console.log(Boolean("I'm"));
console.log(Boolean("True"));
// Non Empty Strings are true

console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(3));
// Any number above 1 is true

console.log(Boolean(true));
// Boolean true is true
