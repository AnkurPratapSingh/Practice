function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  
  const person1 = new Person('Alice', 30, ['reading', 'hiking']);
  const person2 = new Person('Bob', 25, ['painting', 'gaming']);
  
  console.log(person1); 
  console.log(person2); 
  