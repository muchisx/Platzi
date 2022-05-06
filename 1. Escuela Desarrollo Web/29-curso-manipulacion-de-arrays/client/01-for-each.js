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
]

const nodes = [];
const uList = document.getElementById('u-list');
const app2 = document.getElementById('app2')

tasks.forEach(({label, description, status}) => {
    uList.innerHTML += `
    <li>
    <label for=${label}>${description}</label>
    <input 
    type="checkbox" 
    name="${label}" 
    id=""
     ${status ? 'checked' : ""}>
    </li>
    `;
});


