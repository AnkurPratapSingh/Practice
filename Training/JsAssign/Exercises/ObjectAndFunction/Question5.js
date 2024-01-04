function validateObjectProperties(obj, requiredProperties) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input is not a valid object');
    }
  
    if (!Array.isArray(requiredProperties)) {
      throw new Error('Required properties must be an array');
    }
  
    for (const prop of requiredProperties) {
      if (!obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return true;
  }
  
  const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  const requiredProps = ['name', 'age', 'occupation'];
  console.log(validateObjectProperties(person, requiredProps));
  
  const missingProps = ['name', 'gender'];
  console.log(validateObjectProperties(person, missingProps));   