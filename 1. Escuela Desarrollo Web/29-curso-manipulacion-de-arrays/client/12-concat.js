// Intro

// No mutation

const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements, ...otherElements]
newArray;

const newArray1 = [...elements, 'something']
newArray1

const newArray2 = [...elements, ...'something']
newArray2



// Mutating Methods

let elements1 = [1,1,2,2];
elements1 = elements1.concat(otherElements);
elements1;
otherElements;

// Concat

const newArray3 = elements.concat(otherElements);
newArray3;


