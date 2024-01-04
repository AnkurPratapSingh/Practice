// Variables and Data Types:



// 1.Create a function that takes two numbers and swaps their values without using
//    a temporary variable.


function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

const result = swapNumbers(5, 8);
console.log(result); // Output: [8, 5]


// 2.Write a function that converts a temperature from Celsius to Fahrenheit and 
//   vice versa.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsiusValue = 25;
const fahrenheitValue = 68;
console.log(celsiusToFahrenheit(celsiusValue)); // Output: 77
console.log(fahrenheitToCelsius(fahrenheitValue)); // Output: 20



// 3.Implement a function that calculates the area of different shapes (circle, 
//   rectangle, triangle) based on user input

function calculateArea(shape, ...params) {
    if (shape === 'circle') {
        const [radius] = params;
        return Math.PI * radius * radius;
    } else if (shape === 'rectangle') {
        const [length, width] = params;
        return length * width;
    } else if (shape === 'triangle') {
        const [base, height] = params;
        return 0.5 * base * height;
    } else {
        return "Invalid shape";
    }
}

console.log(calculateArea('circle', 5)); 
console.log(calculateArea('rectangle', 4, 6)); 
console.log(calculateArea('triangle', 3, 8)); 
console.log(calculateArea('square', 4, 4)); 