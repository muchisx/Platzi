// Intro

const elements = ["Fire", "Air", "Water"]

let result = "";
let separator = "-"

for (let i = 0; i < elements.length; i++) {
    const item = elements[i];
    
    if (elements[i+1]) {
        result += item+separator;
    } else {
        result += item;
    }
    
}

result;


// Join

let result1 = elements.join('-')
let result2 = elements.join()
let result3 = elements.join("")

result1;
result2;
result3;


// Split

const title = "I'm a title with some spaces"
let result4 = title.split(" ");
result4;

console.log(result4);

let result5 = result4.join('-').toLocaleLowerCase().replace('\'', "")
result5; // for use as an URL


