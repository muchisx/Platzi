
// * Declaring Object Literals

const miguel = {
    name: "Miguel",
    age: 20,
    cursesApproved: [
        "Basic Programming - HTML",
        "Basic Programming - CSS",
        "Basic Programming - Javascript",
    ],

    approveCurse(curseApproved) {
        this.cursesApproved.push(curseApproved);
    }
};
console.log(miguel, '    <- miguel');


// Modifying Object Literals properties with prototype methods

miguel.cursesApproved.push("Responsive Design");
console.log(miguel, '    <- miguel');


// Modifying Object Literals properties with custom user created methods

miguel.approveCurse("Object Oriented Programming");
console.log(miguel, '    <- miguel');



// * Creating a new Prototype

//  ? New way

// This time I will implement RORO because of the expected size of the of my class once is finished,
// since it has many parameters it benefits greatly from RORO
// Note that when a class only receives a few parameters, using RORO might be overkill
// Same for functions that only return few parameters

// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

class Student {
    constructor({
        name,
        age,
        email,
        facebook,
        instagram,
        twitter,
        cursesApproved = [],

    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursesApproved = cursesApproved;
    }

    approveCurse(curseApproved) {
        this.cursesApproved.push(curseApproved)
    }
}

const pepe = new Student({    
    name: "pepe",
    age : 15,
    email: "pepe@pepe.com",
    cursesApproved: [
        "How to become Viral - 2022",
        "Definitive course - Pepe the Frog"
    ],
})

console.log(pepe, '    <- pepe');

pepe.approveCurse("ES6 classes Javascript");
console.log(pepe, '    <- pepe');






















//  ? Old way

function StudentOld(name, age, cursesApproved) {

    // Adding attributes
    this.name = name;
    this.age = age;
    this.curseApproved = cursesApproved;

    // Adding methods option 1
    // this.approveCurse = function(curseApproved) {
    //     this.curseApproved.push(curseApproved);
    // }
}

// Adding methods option 2

StudentOld.prototype.approveCurse = function(curseApproved) {
    this.curseApproved.push(curseApproved);
}


// Creating a new instanced object based on the Prototype

const pepe2 = new StudentOld (
    "Pepe",
    17,
    [
        "Emoji Creation",
        "Becoming Viral"
    ]
)

console.log(pepe2, '    <- pepe2');

