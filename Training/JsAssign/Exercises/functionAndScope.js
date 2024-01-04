// Functions and Scope:


// 1.Build a function that generates a random password based on user-defined 
// length and complexity.


function generateRandomPassword(length, complexity) {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_+=<>?';

    let allChars = '';
    let password = '';

    if (complexity.includes('lower')) allChars += lowerChars;
    if (complexity.includes('upper')) allChars += upperChars;
    if (complexity.includes('number')) allChars += numbers;
    if (complexity.includes('special')) allChars += specialChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

const password = generateRandomPassword(12, 'loweruppernumber');
console.log(password); // Output: Random password with lower, upper, and numbers



// 2.Create a program that checks if a given year is a leap year or not.



function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}




// 3.Write a function that finds the factorial of a given number using recursion.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`); // Output: Factorial value
