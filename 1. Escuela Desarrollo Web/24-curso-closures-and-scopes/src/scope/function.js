const fruits = () => {
    var fruit = 'apple';
    console.log('fruit: ' , fruit);
}

fruits();
// console.log('fruit: ' , fruit); <- this will return error since fruit is inside the local scope;

const anotherFunction = () => {
    var x = 1;
    var x = 2; // <- var does allow for overwritting with consequent declarations
    let y = 1;
    // let y = 2; will return error because let cannot be reassigned
    console.log('x: ' , x);
    console.log('y: ' , y);
}

anotherFunction();
