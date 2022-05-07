const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});



const salariesCOL = colombia.map(person => person.salary)
salariesCOL;

const salariesCOLSorted = salariesCOL.sort((a, b) => a - b);
salariesCOLSorted;

function checkEvenOrOddArrayLength(arraylength) {
    return (arraylength % 2 === 0);
}

function calculateMedianSalary(salariesSorted) {
    const salariesHalfLength = Math.round(salariesSorted.length / 2);
    const salariesMiddlePosition = salariesSorted[salariesHalfLength];
    const isEvenArray = checkEvenOrOddArrayLength(salariesSorted.length);

    if (isEvenArray) {
        let positionA = salariesMiddlePosition;
        let positionB = salariesSorted[salariesHalfLength-1];
        return (positionA + positionB)/2;
    } else return salariesMiddlePosition;
}

console.log('calculateMedianSalary(): ' , calculateMedianSalary(salariesCOLSorted));


// Top 10%


const Top10SliceStart = -(salariesCOLSorted.length*0.1);
Top10SliceStart;


const salariesCOLTop10 = salariesCOLSorted.slice(Top10SliceStart)
salariesCOLTop10;
console.log(salariesCOLSorted.length);

console.log('calculateMedianSalary(): ' , calculateMedianSalary(salariesCOLTop10));