function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number') {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sumArray(numbersArray);
  console.log('Sum:', result);
  