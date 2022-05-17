import hello from "./module";

hello();

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB
    }
}

const calc = new Calculator();
calc.sum(2,2)



// Generators

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
generatorHello.next().value
generatorHello.next().value
generatorHello.next().value
