({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": ".index.html"
    }
})


// Dynamic Imports

const button = document.getElementById("btn");
button.innerHTML;


button.addEventListener('click', async function () {
    const module = await import("./file.js");
    module.hello();
})


// BigInt

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);



// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// Globalthis

globalThis;
console.log(globalThis);


// Nullish coalescing operator ??

const foo = null ?? 'default string';
console.log(foo);


// Optional Chaining

const user = {};
user?.profile?.email;
console.log(user?.profile?.email);

