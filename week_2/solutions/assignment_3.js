class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    getDetails() {
        return `${super.getDetails()} with ${this.doors} doors`;
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, capacity) {
        super(make, model, year);
        this.capacity = capacity;
    }

    getDetails() {
        return `${super.getDetails()} with a capacity of ${this.capacity}`;
    }

}

class Fleet {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    listFleet() {
        this.vehicles.forEach(vehicle => {
            console.log(vehicle.getDetails());
        });
    }
    getDetails() {
        this.vehicles.forEach(vehicle => {
            console.log(vehicle.getDetails());
        });
    }
}

// Testing for the classes
const fleet = new Fleet();
const car1 = new Car('Toyota', 'Corolla', 2020, 4);
const car2 = new Car('Honda', 'Civic', 2019, 4);
const truck1 = new Truck('Ford', 'F-150', 2018, 'half ton');
fleet.addVehicle(car1);
fleet.addVehicle(car2);
fleet.addVehicle(truck1);
fleet.listFleet();
// Output:
// 2020 Toyota Corolla with 4 doors
// 2019 Honda Civic with 4 doors
// 2018 Ford F-150 with a capacity of half ton
// console.log(fleet.getDetails());
