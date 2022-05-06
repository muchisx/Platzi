
const fruits = ['🍒', '🥥', '🥝', '🍎'];

const newArray = [];

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    newArray.push(element + '++')
}

console.log('original', fruits);
console.log('new', newArray);




const newArray2 = fruits.map(item => item + '++');
newArray2;



const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

const filter = /an/

const ovejasFiltradas =  ovejas.filter(({name, color}) => color == 'rojo');
ovejasFiltradas;
console.log(ovejasFiltradas);
