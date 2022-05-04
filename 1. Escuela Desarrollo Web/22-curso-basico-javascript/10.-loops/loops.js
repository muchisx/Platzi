
// ! Loopps


// for loop.
// iterates the loop aslong as the conditions stated inside the () are met
// in the bellow case, it will iterate as long as i is greater than the lenght of the objects array lenght
// and each time it iterates it will add 1 to i

let objects = ["🎥", "📸", "🎞", "🚨"];


takeObjects(objects);

function takeObjects(objects) {

    for(let i = 0; i < objects.length; i++) {
        console.log(`I took the ${objects[i]}`);
    }
    
}

// for of loop
// iterates the loop for each element of the array
// stops after it finishes with the last element

takeObjects2(objects)

function takeObjects2(objects) {

    for (const object of objects) {
        console.log(`I took the ${object}`);
    }
}

// while loop
// does the loop while the condition in the () is true

takeObjects3(objects)

function takeObjects3(objects) {

    while(objects.length > 0) {
        
        let object = objects.shift();
        console.log(`I took the ${object}`);
    }
}