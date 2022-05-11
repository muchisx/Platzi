

// ! Static: attributes and methods



// The following are static attributes and methods of the class duck

class duck {
    static sound = "cuak!";
    static doCuak() {
        return console.log(this.sound, '    <- sound');
    }
}

console.log(duck.sound, '    <- duck.sound');
duck.doCuak();

// The following are static attributes and methods of a literal object "anObject"

const anObject = {
    name: "muchis",
    username: "muchisx",
    age: 25,
};




// ! -------------------------- Static Methods of Prototype Object-- ----------------------------------------



// --------------------Object.keys(obj)-------------------------

// This method returns ennumaerable keys from the argument object

const anObjectKeys = Object.keys(anObject);
console.log(anObjectKeys, '    <- anObjectKeys');



// --------------------Object.getOwnPropertyNames(obj)-------------------------

// This method returns all property names ("keys"), ennumerable and non ennumerable of the argument object

const anObjectOwnPropertiesNames = Object.getOwnPropertyNames(anObject);
console.log(anObjectOwnPropertiesNames, '    <- anObjectOwnPropertiesNames');



// --------------------Object.entries(obj)-------------------------

// This method returns an array that contains arrays containing key/value pairs of all object entries

const anObjectEntries = Object.entries(anObject);
console.log(anObjectEntries, '    <- anObjectEntries');



// --------------------Object.getOwnPropertyDescriptors(obj)-------------------------

// This method returns an object that the original object with desctructured key/value pairs that describe their internal permission properties

const anObjectgetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(anObject);
console.log(anObjectgetOwnPropertyDescriptors, '    <- anObjectgetOwnPropertyDescriptors');



// --------------------Object.defineProperty(obj, properties, attributes)-------------------------

// This method adds one or more properties to an object, and/or modifies attributes of existing properties.

Object.defineProperty(anObject, "name", {
    value: "hey",
    writable: false,
});

console.log(anObject, '    <- anObject with non writtable name')
// console.log(anObjectgetOwnPropertyDescriptors, '    <- anObjectgetOwnPropertyDescriptors');

// ennumaerable 
// false <- means cannot be listed in the object as an ennumerable indexable property, but it will still exist within the object prototype.

// writable
// false <- means the property cannot be modified 

// configurable 
// false <- means the propertie cannot be deleted



// ! Javascript Memory breakdown

// Assigning a variable to another variable creates 2 different spots in memory that can be changed independently

// Variables live in the STACK memory

let aNumber = 10;
console.log(aNumber, '    <- aNumber');
let anotherNumber = aNumber;
console.log(anotherNumber, '    <- anotherNumber');

anotherNumber = 30;
console.log(anotherNumber, '    <- anotherNumber');

aNumber = 15;
console.log(aNumber, '    <- aNumber');


// Asigning an object to another object instead, creates a pointer to the original object and changing a value in object1 will change the value in object2
// and same in reverse

// Objects live in the HEAP memory


let object1 = {
    name: "muchisx",
    age: 15,

    beObject() {
        console.log('Im an object');
    }
}
console.log(object1, '    <- object1');

let object2 = object1;
console.log(object2, '    <- object2');

// notice how changing object 2 also changed object 1
// this is because they both live in the same memory space
// since object 2 is just a shorcut pointer to object 1

object2.name = "Puppy"
console.log(object2, '    <- object2');
console.log(object1, '    <- object1');





// ! Shallow and deep copies


// Shallow Copies

// A shallow copy of an object is a copy whose properties share the same references 
// (point to the same underlying values) as those of the source object from which the copy was made.

// For shallow copies, it's important to understand that selectively changing the value of a shared property 
// of an existing element in an object is different from assigning a completely new value to an existing element.


// Some of the following methods vary in the result of the copy but none acheive a perfect Deep Copy of the object
// So they remain shallow copies


// 1 - for in object loop, it will replicate everything in the object, but still, they remain attacthed.

for (prop in object1) {
    object2[prop] = object1[prop]
}
console.log(object2, '    <- object2');

// 2 object.assign - same result as object2 = object1

Object.assign(object2, object1);
console.log(object2, '    <- object2');

// 3 object.create - this will use the object 1 as prototype for object 2, but again, the prototype will be attacthed to object 2

let object3 = Object.create(object1)
console.log(object3, '    <- object3');

// 4 json stringfy into json parse - this methods CAN do a DEEP COPY if the object only contains attributes but DOES NOT work with methods, it just ignores them

let object1Stringified = JSON.stringify(object1);
console.log(object1Stringified, '    <- object1Stringified');

let object4 = JSON.parse(object1Stringified);
console.log(object4, '    <- object4');




// Deep Copy

// A deep copy is the copying of an object by allocating the new object in a different space in memory
// Meaning that the new object is totally independant from the original object
// The deep copy must replicate all the attributes and methods of the original

// 1 Recursivity

function deepCopy(subject) {
    let copy;
  
    if (Array.isArray(subject)) {
      copy = [];
    } else if (typeof subject === "object") {
      copy = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      copy[key] = deepCopy(subject[key]);
    }
  
    return copy;
}

let object5 = deepCopy(object1);
console.log(object5, '    <- object5');

object5.name = "I wont change the others!"
console.log(object5.name, '    <- object5.name');
console.log(object1.name, '    <- object1.name');