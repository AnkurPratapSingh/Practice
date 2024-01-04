function calculateAverage(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
  
    if (numbers.length === 0) {
      throw new Error('Array is empty');
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
  }
  
  const numbersArray = [5, 10, 15, 20];
  const result = calculateAverage(numbersArray);
  console.log('Average:', result);
  