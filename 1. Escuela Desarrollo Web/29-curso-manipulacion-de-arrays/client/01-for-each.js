// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "./01-for-each.html"
    }
})

// ---------------- QUOKKA --------------------------------


// Intro forEach

const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);
}

letters.forEach(item => console.log(item));


// HTML Implementation


const products = [
    { title: 'Burger', price: 121},
    { title: 'Pizza', price: 121},
]

const app = document.getElementById('app');


products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price} </li>`;
})


const tasks = [
    {label: 'House', description: 'Clean bathroom', status: false},
    {label: 'Self', description: 'Study Arrays', status: true},
    {label: 'Pet', description: 'Feed Pet', status: true},
    {label: 'House', description: 'Pay house bills', status: true},
    {label: 'Work', description: 'Finish frontpage', status: false},
    {label: 'Work', description: 'Deploy website', status: true},
    {label: 'Work', description: 'Make your porfolio !', status: false},
    {label: 'Self', description: 'Meditate', status: false},
]

// const nodes = [];
// const uList = document.getElementById('u-list');
// const app2 = document.getElementById('app2');


// tasks.forEach(({label, description, status}) => {
//     uList.innerHTML += `
//     <li>
//     <label for=${label}>${description}</label>
//     <input 
//     type="checkbox" 
//     name="${label}" 
//      ${status ? 'checked' : ""}>
//     </li>
//     `;
// });


const app3 = document.getElementById('app3');

tasks.forEach(({label, description, status}) => {
    let ulExists = app3.querySelector(`#${label}`) != null;

    if (ulExists) {
        
        let ulElement =  app3.querySelector(`#${label}`);

        ulElement.innerHTML += `
        <li>
        <label for=${label}>${description}</label>
        <input 
        type="checkbox" 
        name="${label}" 
        ${status ? 'checked' : ""}>
        </li>
        `

    } else {
        app3.innerHTML += `
        <ul id="${label}"> ${label}
            <li>
            <label for=${label}>${description}</label>
            <input 
            type="checkbox" 
            name="${label}" 
            ${status ? 'checked' : ""}>
            </li>
        </ul>
        `
    }


});


