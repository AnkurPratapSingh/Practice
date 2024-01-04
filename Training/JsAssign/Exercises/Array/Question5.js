function findIndex(arr, target) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
  
    return -1; 
  }
  
  const numbersArray = [5, 10, 15, 20];
  const targetNumber = 15;
  const result = findIndex(numbersArray, targetNumber);
  console.log('Index of', targetNumber, 'is', result); 
  