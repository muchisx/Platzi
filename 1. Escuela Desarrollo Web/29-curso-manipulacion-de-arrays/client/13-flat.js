// Intro

const matrix = [
    [3,2,1],
    [4,5,6 , ["a","b","c", [12,13,14]]],
    [7,8,9],
]


let newArray = [];

const flattenArrayRecursive = (array) => {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(Array.isArray(element)) flattenArrayRecursive(element);
        else newArray[newArray.length] = element;

    }
}

flattenArrayRecursive(matrix);
newArray;


// Flat

const newArray2 = matrix.flat(Infinity)
newArray2;