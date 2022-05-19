// Intro

const items = [1,3,2,3,5,7,2,3,1,7,22,3,15];

const result = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {});

result;



// Reduced combined
// Map + Reduce

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "high",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "high",
    },
];


const result2 = data
    .map(item => item.level)
    .reduce((obj, item) => {

        if (item === 'low') obj['low'] += 1;
        if (item === 'medium') obj['medium'] += 1;
        if (item ==='high') obj['high'] += 1;

        return obj
    }, {
        low: 0,
        medium: 0,
        high: 0
});

result2;


const result2b = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;        
}, {});

result2b;


// Challenge


const randomList = Array.from({length: 30}, () => Math.floor(Math.random()*100));

const result3 = randomList.reduce((obj, item) => {
    
    if (item < 5) obj["range1_5"] += 1;
    else if (item < 9) obj["range6_8"] += 1
    else if (item < 11) obj["range9_10"] += 1
    else obj["range11_plus"] += 1
    
    return obj
}, {
    range1_5: 0,
    range6_8: 0,
    range9_10: 0,
    range11_plus: 0,
})

result3;