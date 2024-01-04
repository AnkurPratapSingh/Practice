// Objects and Classes:



// 1.Design a class for a "Book" with properties like title, author, and ISBN. 
// Implement a method to display book details.





class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`ISBN: ${this.isbn}`);
    }
}

const myBook = new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76949-4");
myBook.displayDetails();


// 2.Create an object that simulates a basic calculator with methods for addition, 
// subtraction, multiplication, and division.


const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.multiply(4, 6)); // Output: 24


// 3.Build a class for a "Car" with methods to start, stop, and accelerate the car. 
// Implement speed limits and fuel consumption

class Car {
    constructor() {
        this.speed = 0;
        this.isRunning = false;
        this.fuel = 100; // Assume full tank at the beginning
        this.fuelEfficiency = 10; // Kilometers per liter
    }

    start() {
        this.isRunning = true;
        console.log("Car started.");
    }

    stop() {
        this.isRunning = false;
        this.speed = 0;
        console.log("Car stopped.");
    }

    accelerate() {
        if (this.isRunning) {
            if (this.speed < 100) {
                this.speed += 10;
                this.fuel -= this.speed / this.fuelEfficiency;
                console.log(`Accelerated. Current speed: ${this.speed} km/h`);
                console.log(`Remaining fuel: ${this.fuel.toFixed(2)} liters`);
            } else {
                console.log("Speed limit reached.");
            }
        } else {
            console.log("Car is not running.");
        }
    }
}

const myCar = new Car();
myCar.start();
myCar.accelerate(); // Output: Accelerated. Current speed: 10 km/h
myCar.accelerate(); // Output: Accelerated. Current speed: 20 km/h
myCar.accelerate(); // Output: Accelerated. Current speed: 30 km/h
myCar.stop();
