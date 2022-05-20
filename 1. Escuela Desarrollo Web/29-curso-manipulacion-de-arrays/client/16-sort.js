const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];

months.sort();

numbers.sort();
numbers.sort((a,b) => a - b);
numbers.sort((a,b) => b - a);


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 1)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2022, 1, 2)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2022, 1, 4)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2022, 1, 3)
    },
];

orders.sort((a,b) => a.total - b.total)

orders.sort((a,b) => a.date - b.date);