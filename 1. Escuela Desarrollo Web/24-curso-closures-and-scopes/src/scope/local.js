const helloWorld = () => {
    const hello = 'Hello World';
    console.log('hello: ' , hello);
}

helloWorld();
// console.log('hello: ' , hello); // <- This cannot be accesed because hello is in the function's local scope



var scope = "i am global";

const functionScope = () => {
    var scope = "i am just a local";
    const func = () => {
        return scope;
    }
    console.log('func(): ' , func());
}

functionScope();
console.log('scope: ' , scope);