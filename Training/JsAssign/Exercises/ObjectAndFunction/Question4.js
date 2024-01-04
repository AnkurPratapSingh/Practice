function objectToArray(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input is not a valid object');
    }
  
    const result = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]]);
      }
    }
  
    return result;
  }
  
  const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  const arrayResult = objectToArray(person);
  console.log(arrayResult);
  