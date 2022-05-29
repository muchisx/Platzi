//


const somethingWillHappen = () => {

    return new Promise((resolve, reject) => {

        if (false) {
            resolve('resolved!');
        } else {
            reject('rejected!');
        }
    });
};


somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))


const somethingWillHappen2 = () => {

    return new Promise((resolve, reject) => {

        if (true) {
            setTimeout(() => {
                resolve('resolve')
            }, 2000);
        } else {
            const error = new Error('reject');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(reject => console.log(reject))


let promise = new Promise((resolve, reject) => {

    if (true) {
        resolve('hey')
    } else {
        reject('yo')
    }
})

console.log(promise);