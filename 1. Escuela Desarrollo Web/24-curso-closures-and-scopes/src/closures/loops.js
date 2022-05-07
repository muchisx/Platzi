


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
