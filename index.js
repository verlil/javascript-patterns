class Car {
    constructor(doors, engine, color, model) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        this.model = model;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey', 'civic');
            case 'honda':
                return new Car(2, 'V4', 'red', 'honda');
        }
    }
}

class Suv {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SuvFactory {
    createCar(type) {
        switch (type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey', 'cx5');
            case 'santa fe':
                return new Car(2, 'V4', 'red', 'santa fe');
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

const cx5 = autoManufacturer('suv', 'cx5');

console.log(cx5);