// Intro

const totals = [1,2,3,4];
let sum = 0;

for (let i = 0; i < totals.length; i++) {
    const item = totals[i];
    sum += item;
}
sum;



// Reduce

const sum2 = totals.reduce((acc, item) => acc + item, 0)
sum2;


