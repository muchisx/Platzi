const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; // This is available outside of If because var is function-scoped
        let fruit2 = 'banana'; // This wont be available outside of IF because let is blocked-scoped
        const fruit3 = 'kiwi'; //  This wont be available outside of IF because const is blocked-scoped
    }
    console.log('fruit1: ' , fruit1);
    // console.log('fruit2: ' , fruit2);
    // console.log('fruit3: ' , fruit3);

}

fruits();


let x = 1;
{
    let x = 2;
    console.log('x: ' , x);
}

console.log('x: ' , x);



var y = 1;
{
    var y = 2;
    console.log('y: ' , y);
}
console.log('y: ' , y);



const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log('i: ' , i);
        }, 1000)
    }
    for (let n = 0; n < 10; n++) {
        setTimeout(() => {
            console.log('n: ' , n);
        }, 1000)
    }
}

anotherFunction();
