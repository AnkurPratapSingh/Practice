// Arrays and Loops:


// 1.Write a function to find the second largest number in an array of integers.

function secondLargestNumber(arr) {
    arr = arr.sort((a, b) => b - a);
    return arr[1];
}

const numbers = [12, 45, 7, 32, 10];
console.log(secondLargestNumber(numbers)); 



// 2.Create a program that generates a multiplication table (up to 10x10) and 
// displays it in the console.


function generateMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= 10; j++) {
            row += (i * j) + '\t';
        }
        console.log(row);
    }
}

generateMultiplicationTable();



// 3.Implement a function that filters out duplicate values from an array


function filterDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

const originalArray = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = filterDuplicates(originalArray);
console.log(uniqueArray);
