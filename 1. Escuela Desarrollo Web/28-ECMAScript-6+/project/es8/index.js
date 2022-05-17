

// Object.entries(obj)

const data = {
    frontend: 'Miguel',
    backend: 'Sandro',
    design: 'Gomez',
}

const entries = Object.entries(data);
entries.length;


// Object.values(obj)

const values = Object.values(data);
entries.length;



// Padding

const string = 'hello';
string.padStart(8, 'hi ');
string.padEnd(11, ' World');

// Trailing commas

const obj = {
    trailing: 'comma -> can use comma at the end',
}

// Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hey = await helloWorld();
    console.log(hey, '    <- hey');;
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hellow = await helloWorld();
        hellow
    }
    catch (error) {
        error;
    }
}

anotherFunction();