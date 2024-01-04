function findLongestString(strings) {
    if (!Array.isArray(strings)) {
      throw new Error('Input is not an array');
    }
  
    let longestString = '';
    for (let i = 0; i < strings.length; i++) {
      if (typeof strings[i] === 'string' && strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }
    return longestString;
  }
  
  const stringsArray = ['apple', 'banana', 'watermelon', 'date'];
  const result = findLongestString(stringsArray);
  console.log('Longest string:', result); 
  