// ! Operators - Asign, Compare and Aritmethics

// * Assign
// Use "=" for assigning values

const assignMeAValue = "I'm an assigned value"
console.log(assignMeAValue);
console.log(typeof(assignMeAValue));

// * Compare
// Use "==" "!=" "<=" ">=" "<" ">" "===" "!==" for comparing values

// "==" loose comparaison between two values that doesn't take into account the type of value
// returns truthy or falsy

const imString = "3";
const imNumber = 3;
console.log(typeof(imString));
console.log(typeof(imNumber));

console.log(imString == imNumber);

// See how these two different types of value are true in comparaison when we only take into account
// that a string can be read as a number

// "!=" "<=" ">=" "<" ">" Are also loose comparaisons as above


// "!=" different than

imString;
imNumber;
console.log(typeof(imString));
console.log(typeof(imNumber));

console.log(imString != imNumber);


// "<=" less or equal than

const imString2 = "3";
const imNumber2 = 4;
console.log(typeof(imString2));
console.log(typeof(imNumber2));

console.log(imString2 <= imNumber2);


// ">=" greater or equal than

const imString3 = "4";
const imNumber3 = 3;
console.log(typeof(imString3));
console.log(typeof(imNumber3));

console.log(imString3 >= imNumber3);


// ">" greater than

const imString4 = "4";
const imNumber4 = 3;
console.log(typeof(imString4));
console.log(typeof(imNumber4));

console.log(imString4 > imNumber4);


// "<" less than

const imString5 = "3";
const imNumber5 = 4;
console.log(typeof(imString5));
console.log(typeof(imNumber5));

console.log(imString5 < imNumber5);



// "===" strict comparaison between two values that takes into account the type of value
// returns true or false

imString;
imNumber;
console.log(typeof(imString));
console.log(typeof(imNumber));

console.log(imString === imNumber);

// see how the values are no longer true since it takes into account the fact that one is
// string and the other is a number


// "!==" strict different than

imString;
imNumber;
console.log(typeof(imString));
console.log(typeof(imNumber));

console.log(imString !== imNumber);


// * Logicals
// "&&" = AND
// "||" = OR
// "!" = NOT

// These Logicals operators help us combine other booleans to come up with more complicated comparaisons

var itsTrue = true;
itsTrue;
var itsNotTrue = !true;
itsNotTrue;

var oneIsTrue = itsTrue || itsNotTrue;
oneIsTrue;

var allAreTrue = itsTrue && itsNotTrue;
allAreTrue;




// * Aritmethics
// Use + for sum
// Use - for substaction
// Use * For multiplying
// Use / For division

var sum = 10 + 2;
sum;
var substraction = 10 - 2;
substraction;
var multiplying = 10 * 2;
multiplying;
var division = 10 / 2;
division;

// Use += for Adition assigment (previous value + new one)
// Use -= for substraction assigment (previous value - new one)
// Use *= for multiplying assigment (previous value * new one)
// Use /= for division assigment (previous value / new one)

sum += 10 + 2;
sum;
substraction -= 10 - 2;
substraction;
multiplying *= 10 * 2;
multiplying;
division /= 10 / 2;
division;

// Use ++ for adding 1 to the previous value each time
// Use -- for substracting 1 from the previous value each time

sum++;
sum;
substraction--;
substraction;

