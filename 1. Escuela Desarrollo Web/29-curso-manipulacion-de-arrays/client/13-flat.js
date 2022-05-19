// Intro

const matrix = [
    [1,2,3],
    [4,5,6 , ["a","b","c", [12,13,14]]],
    [7,8,9],
]


const flattenRecursive = () => {
    let arrayFlattened = [];

    function flattenArray(array) {
        
        if (arrayFlattened.length < 5) {
            arrayFlattened += array;
            return flattenArray(arrayFlattened)
        }
    }

    return flattenArray();
}

let flatArray = flattenRecursive();


console.log(flatArray);
