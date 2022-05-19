const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];


const orderTotals = orders.map(item => item.total);
orderTotals;



// ! Watch out here
// ! If you do this you will mutate the original

const orders2 = orders.map(item => {
    item.tax = .19;
    return item;
})

orders;
orders2;

// See how it affects the original object




// * Do this instead
// * if you are worknig with objects

const orders1 = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];


const orders3 = orders1.map(item => {
    return {
        ...item,
        tax: .19
    }
})

// See how it didnt mutate the original

orders1;
orders3;