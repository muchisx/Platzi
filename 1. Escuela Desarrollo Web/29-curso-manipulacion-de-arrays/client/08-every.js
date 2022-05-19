// Intro


const numbers = [1,30,49,29,10,13];

let result = true;

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    if (item >= 40) {
        result = false;
    }
}

result;

// Every

let result2 = numbers.every(item => item <= 40);
let result3 = numbers.every(item => item <= 60);

result2;
result3;


// Exo

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const result4 = team.every(item => item.age < 15)
result4;

// Members must be bellow the age 15 to accept the team