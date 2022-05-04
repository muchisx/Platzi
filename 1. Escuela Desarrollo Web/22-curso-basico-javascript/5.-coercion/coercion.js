
// ! Coercion
// Coercion is the act of changing the type of value of something

var numberPlusString = 4 + "7";
console.log(numberPlusString);
console.log(typeof(numberPlusString));
// See how a number + string concatenates it into a string.


var numberTimesString = 4 * "7";
console.log(numberTimesString);
console.log(typeof(numberTimesString));
// See how a number * string, converts the string into number and does the * operation

/// Manually turn a value into another
var numberIntoString = 4;
console.log(numberIntoString);
console.log(typeof(numberIntoString));

console.log(typeof(String(numberIntoString)));

// See how with the String() constructor turns the value into a string

var StringIntoNumber = "6";
console.log(StringIntoNumber);
console.log(typeof(StringIntoNumber));

console.log(Number(StringIntoNumber));
console.log(typeof(Number(StringIntoNumber)));

// See how the string became a number value
// Now, not all strings can be numbers, other string values might fail coercion

var StringIntoNumberError = "Miguel";
console.log(StringIntoNumberError);
console.log(typeof(StringIntoNumberError));

console.log(Number(StringIntoNumberError));
console.log(typeof(Number(StringIntoNumberError)));


// See how it says NaN = Not a Number
