
// Intro

const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

newArray;
words;


// Filter

const newArray2 = words.filter(item => item.length >= 6);

newArray2
words;



const orders = [
    {
      customerName: "Nicolas",
      customerLastName: 'Bronx',
      age: 15,
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      customerLastName: 'Wolf',
      age: 22,
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      customerLastName: 'Perez',
      age: 30,
      total: 180,
      delivered: true,
    },
    {
      customerName: "Santiago",
      customerLastName: 'Perez',
      age: 30,
      total: 200,
      delivered: false,
    },
    {
      customerName: "Valentina",
      customerLastName: 'Galio',
      age: 18,
      total: 240,
      delivered: true,
    },
];

const deliveredOrders = orders.filter(item => item.delivered);
deliveredOrders;

const deliveredAndMediumOrders = orders.filter(item => item.delivered && item.total >= 100);
deliveredAndMediumOrders;



const searchByCustomerName = (query) => {
    const result = orders.filter(item => item.customerName.includes(query))
    return result;
}

searchByCustomerName('San');


// Reto

const searchByCustomerInfo = (query) => {
    const result = orders.filter(item => item.customerName.includes(query) || item.customerLastName.includes(query) || item.age === query)
    return result;
}

searchByCustomerInfo('Pe');
