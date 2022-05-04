// ! Conditionals

// * IF

const isFalse = false;
const isTrue = true;

if (isFalse) {
    console.log("Cant execute this line because it's false");
}

if (isTrue) {
    console.log("we can see this one because is true!");
}

// * ELSE


if (isFalse) {
    console.log("Cant execute this line because it's false");
} else {
    console.log("this is read because above me was false and i have no conditions to be read!");
}


// * ELSE IF 

if (isFalse) {
    console.log("Cant execute this line because it's false");
} else if (isTrue) {
    console.log("this is read because above me was false and i was true!");
}


if (isFalse) {
    console.log("Cant execute this line because it's false");
} else if (isFalse) {
    console.log("this is read because above me was false and i was true!");
} else if (isTrue) {
    console.log("this is read because EVERYTHING above me was false and i was true!");
}




// * "?" operator

// syntax is 
// condition ? true : false;

isFalse ? console.log("I'm true!") : console.log("I'm false!");
isTrue ? console.log("I'm true!") : console.log("I'm false!");



// * Rock Paper scicors

let gameOptions = ["Rock ✊🏼", "Paper ✋🏼", "Scissors ✌🏼"];

let computer = gameOptions[Math.floor(Math.random()*3)];
computer;
let user = gameOptions[Math.floor(Math.random()*3)];
user;

gameWinner(user,computer);

function gameWinner(user,computer) {

    if (user === computer) {
        console.log("Draw!");
    }

    if (user !== computer) {

        if (user === "Rock ✊🏼" && computer === "Scissors ✌🏼") {
            console.log("User wins!");
        } else if (user === "Scissors ✌🏼" && computer === "Paper ✋🏼") {
            console.log("User wins!");
        } else if (user === "Paper ✋🏼" && computer === "Rock ✊🏼") {
            console.log("User wins!");
        } else {
            console.log("Computer wins!");
        }

    } 
}


// * Switch

let aNumber = 2;

switch (aNumber) {
    case 1:
        console.log("I'm one!");
    break;
    case 2:
        console.log("I'm two!");
    break;
    case 3:
        console.log("Im three!");
    break;
    default:
        console.log("I'm not a case!");
}






