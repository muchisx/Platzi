
// ! Objects 


// Manually creating Objects

let myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carSummary: function() {
        console.log(`My car is a ${this.brand} model ${this.model} from ${this.year}`);
    }
}



myCar;
myCar.carSummary();
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.year);


// Using functions to create objects

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let firstCar = new Car("Tesla", "Model 3", 2020);
firstCar;
let secondCar = new Car("Toyota", "algo 2", 2000);
secondCar;
let thirdCar = new Car("BMW", "M?? ", 1990);
thirdCar;


// Using class and constructor

class otherCar {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let otherCar1 = new otherCar("Mazeratii", "chorizo", 2021);
otherCar1;
let otherCar2 = new otherCar("Ford", "party", 2014);
otherCar2;
let otherCar3 = new otherCar("Lambo", "ginni", 2000);
otherCar3;





// Exo
// Make a loop that can create 30 car objects randomly

let brands = ["Mazeratti", "Ford", "Lambo", "BMW", "Chev", "Tesla"]
let models = ["3", "2", "1", "Model X", "Model S", "Modelidk bro"]
let years = [1990, 2000, 2040, 2003, 1997, 2020]

make30Cars(otherCar);

function make30Cars (otherCar) {
    
    let iterations = 30;
    let carList = [];

    for (i = 0; i < iterations; i++) {
        
        let random1 = Math.floor(Math.random()*6)
        let random2 = Math.floor(Math.random()*6)
        let random3 = Math.floor(Math.random()*6)

        carList.push(new otherCar(brands[random1], models[random2], years[random3]))
    }
    console.log(carList);
}