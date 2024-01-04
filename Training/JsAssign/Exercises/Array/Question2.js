function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
  
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    return evenNumbers;
  }
  
  const numbersArray = [1, 2, 3, 4, 5, 6];
  const result = filterEvenNumbers(numbersArray);
  console.log('Even numbers:', result); 
  