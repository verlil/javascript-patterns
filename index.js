let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }

    }
}

// class Suv extends Car {
//     constructor(doors, engine, color, wheels) {
//         super(doors, engine, color);
//         this.wheels = wheels;
//     }
// }

const civic = new Car(4, 'V8', 'red');
const honda = new Car(2, 'V4', 'pink')

console.log(civic);
console.log(honda);