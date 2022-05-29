
//



// Promise

const doSomething = () => {

    return new Promise((resolve, reject) => {

        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))

    });
}


// Calling the function that returns a promise with async-await

const doSomethingAsync = async () => {

    const something = await doSomething();
    console.log(something);
}

console.log('Before');
doSomethingAsync();
console.log('After');


// Using try and catch for catching errors

const doSomethingAsyncWithTry = async () => {

    try {
        const something = await doSomething(); 
        console.log(something);  
    } catch {
        console.error(error);
    }
}


console.log('Before 2');
doSomethingAsyncWithTry();
console.log('After 2');