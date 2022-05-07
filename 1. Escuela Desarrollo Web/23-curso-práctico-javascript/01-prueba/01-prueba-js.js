

let Name = "Miguel";
let lastName = "Ángel";
let nickname = "Mix"
let username = "muchisx";
let age = 25;
let email = "mnm.soul@gmail.com";
let isOfLegalAge = age > 18;
isOfLegalAge;
let savedMoney = 200;
let debts = 50;

let fullName = Name + " " + lastName;
fullName;

let netMoney = savedMoney - debts;
netMoney;


function printUserInformation (fullName,nickname) {
    console.log(`My name is ${fullName} but I prefer you call me ${nickname}`);
}

printUserInformation(fullName, nickname);





let subscriptionTier = "Basic";

function printSubscriptionTierBenefits(subscriptionTier) {

    if (subscriptionTier == "Free") {
        console.log("You can only take free classes");
    } else if (subscriptionTier == "Basic") {
        console.log("You can take almost all courses a month");
    } else if (subscriptionTier == "Expert") {
        console.log("You can take almost all courses for a year");
    } else if (subscriptionTier == "ExpertPlus") {
        console.log("You and someone else can take every Platzi course for a year");
    }
}   

printSubscriptionTierBenefits(subscriptionTier);

function forToWhile1() {

    let i = 0;

    while (i < 5) {
        console.log(`i is ${i}`);
        i++;
    }
}

forToWhile1();


function forToWhile2() {

    let i = 10;

    while (i >= 2) {
        console.log(`i is ${i}`);
        i--;
    }
}

forToWhile2();


let userAnswer = 4;
let question = 2+2;

function evaluateAnswer(userAnswer, question) {

    if (userAnswer == question) {
        console.log('Congrats!');
    } else {
        console.log('Try again!');
    }
}

evaluateAnswer(userAnswer, question);


let firstArray = ['🥝', '🍓', '🥥'];

function printFirstArrayElement(firstArray) {

    console.log(firstArray[0]);
}

printFirstArrayElement(firstArray);



function printAllArrayOneByOne(firstArray) {

    firstArray.forEach(element => {
        console.log(element);
    });

}

printAllArrayOneByOne(firstArray);


let firstObject = {
    animal: "dog",
    name: "muchis",
    age: 5,
    personality: 'crazy'
}


function printAllObjectOneByOne(firstObject) {

    Object.entries(firstObject).forEach(element => {
        console.log(element);
    });
}

printAllObjectOneByOne(firstObject);