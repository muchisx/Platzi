


/// 1 <----------------------

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts = [];


const swapProductAround = (product) => {

    let productExist = products.some(item => item.id === product);

    if (productExist) {

        let productIndex = products.findIndex(item => item.id === product);
        
        myProducts.push(products[productIndex])
        products.splice(productIndex, 1)  
    } else {

        console.log('That product doesnt Exist!');
    }
}

swapProductAround('🍕')

products;
myProducts;



/// 2 <----------------------


const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts2 = [];


const filterOutProducts = (product) => {

    let productExist = products2.some(item => item.id === product);

    if (productExist) {

        let filteredProducts = products.filter(item => item.id !== product);
        
        myProducts2.push(filteredProducts);
    } else {

        console.log('That product doesnt Exist!');
    }
}

filterOutProducts('🍕');

products2;
myProducts2;




/// 3 <----------------------


const products3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];


const requiredParam = (param) => {
    console.warn(`${param} is required`);
}

const updateProductInfo = ({
    id = requiredParam('id'), 
    title, 
    price, 
    description,
}) => {

    if (id) {

        let productIndex = products3.findIndex(item => item.id === id);
        title ? products3[productIndex].title = title : console.log('No title updated');
        price ? products3[productIndex].price = price : console.log('No price updated');
        description ? products3[productIndex].description = description : console.log('No description updated');
    }


}

updateProductInfo({
    title: 'PIZAAAAAAA',
    description: 'WAZAAPPP',
    price: 99999999,
});

products3;
