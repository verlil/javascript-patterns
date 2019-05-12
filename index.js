class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suv extends Car {
    constructor(doors, engine, color, wheels) {
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

const civic = new Car(4, 'V8', 'red');
const cx5 = new Suv(2, 'V6', 'black', 4);

console.log(civic);
console.log(cx5);