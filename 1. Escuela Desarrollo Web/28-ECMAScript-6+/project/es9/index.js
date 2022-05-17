

// Spread Operator 

const obj = {
    name: 'muchis',
    age: 15,
    country: 'CO',
};

let {name, ...restOfStuff} = obj;
restOfStuff;


const obj1 = {
    name: 'muachix',
    age: 16,
}

const obj2 = {
    ...obj1,
    country: 'MX'
}


// Promise .finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response, '    <- response'))
    .catch(error => console.log(error, '    <- error'))
    .finally(() => console.log('    <- Finalizó'))



// Regex Management

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-15');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day, '    <- year, month, day');