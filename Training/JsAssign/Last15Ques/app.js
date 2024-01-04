
// 1. Given an array of numbers, create a new array that contains only the positive numbers



const arr = [-2, 5, -10, 0, 15, -7, 3, -1, 8];

const positiveArray = arr.filter(num => num > 0);

console.log(positiveArray);


// 2. Given an array of strings, transform each string to uppercase and create a new array

const strArray = ['apple', 'banana', 'orange', 'grape'];

const uppercaseArray = strArray.map(str => str.toUpperCase());

console.log(uppercaseArray);


// 3. Given an array of objects representing students, calculate the average score of all students.

const students = [
    { name: 'Ankur', marks: 89 },
    { name: 'Saksham', marks: 90 },
    { name: 'Harsh', marks: 78 }
   
  ];
  
  const totalMarks = students.reduce((sum, student) => sum + student.Marks, 0);
  const averageMarks = totalMarks / students.length;
  
  console.log(averageMarks);


  // 4. Given an array of names, create a new array containing the lengths of each name

  const names = ['Ankur', 'Sakasham', 'Shubham', 'Deepak', 'Divyanshu'];

  const nameLengths = names.map(name => name.length);

  console.log(nameLengths);

  
  // 5. Given an array of products, calculate the total price of all products that are in stock.


  const products = [
    { name: 'Product 1', price: 10, inStock: true },
    { name: 'Product 2', price: 20, inStock: false },
    { name: 'Product 3', price: 30, inStock: true },
    { name: 'Product 4', price: 15, inStock: true },
    { name: 'Product 5', price: 25, inStock: false }
    ];
  
    const totalPriceInStock = products.reduce((total, product) => {
      if (product.inStock) {
        return total + product.price;
      }
      return total;
    }, 0);
  
    console.log(totalPriceInStock);


    // 6. Given an array of strings, create a new array containing only strings that have more than 5 characters
  
    const strs = ['apple', 'banana', 'grape', 'kiwi', 'orange', 'pear'];

    const longerThanFiveStr = strs.filter(str => str.length > 5);

    console.log(longerThanFiveStr);


    // 7. Given an array of numbers, calculate the product of all numbers

    const numbers = [2, 3, 4, 5];

    const productAns = numbers.reduce((accum, num) => accum * num, 1);
    
    console.log(productAns);

    // 8. Given an array of objects representing books, create a new array containing the titles of  all books.
    
    const books = [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 2', author: 'Author 2' },
        { title: 'Book 3', author: 'Author 3' },
        { title: 'Book 4', author: 'Author 4' }
      ];
      
      const titles = books.map(book => book.title);
      
      console.log(titles);

    // 9.  Given an array of temperatures in Celsius, convert each temperature to Fahrenheit and create a new array


    const celsiusTemperatures = [0, 10, 20, 30, 40];

    const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);
    
    console.log(fahrenheitTemperatures);


    // 10. Given an array of people, filter out the people who are above 30 years old and then create a new array containing their names
    

    const people = [
        { name: 'Ankur', age: 28 },
        { name: 'Bipin', age: 35 },
        { name: 'Chirag', age: 42 },
        { name: 'Deepak', age: 25 },
        { name: 'Eshwar', age: 31 }
      ];
      
      const above30 = people.filter(person => person.age > 30);
      const namesAbove30 = above30.map(person => person.name);
      
      console.log(namesAbove30);
      

    // 11. Given an array of words, create a new array containing the first letter of each word 

    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

    const firstLetters = words.map(word => word[0]);

    console.log(firstLetters);


    // 12 . Given an array of transactions (each transaction is an object with amount and type),calculate the total amount of all positive transactions

    const transactions = [
        { amount: 100, type: 'deposit' },
        { amount: -50, type: 'withdrawal' },
        { amount: 200, type: 'deposit' },
        { amount: -30, type: 'withdrawal' },
        { amount: 50, type: 'deposit' }
      ];
      
      const positiveTransactions = transactions.filter(transaction => transaction.amount > 0);
      const totalPositiveAmount = positiveTransactions.reduce((total, transaction) => total + transaction.amount, 0);
      
      console.log(totalPositiveAmount);
      

    // 13. Given an array of strings, create a new array containing strings that start with the letter "A"

    const strings = ['apple', 'banana', 'mango', 'grape', 'avocado'];

    const startsWithA = strings.filter(str => str.startsWith('A'));

    console.log(startsWithA);

    // 14. Given an array of numbers, create a new array with each number squared

    const nums = [2, 3, 4, 5, 6];

    const squaredNumbers = nums.map(number => number * number);
    
    console.log(squaredNumbers);
    

    // 15. Given an array of products, create a new array with the names of products that have a price less than 50 and are in stock
      
    const prod = [
        { name: 'Product 1', price: 30, inStock: true },
        { name: 'Product 2', price: 60, inStock: false },
        { name: 'Product 3', price: 25, inStock: true },
        { name: 'Product 4', price: 40, inStock: true },
        { name: 'Product 5', price: 70, inStock: true }
      ];
      
      const result = prod.filter(product => product.price < 50 && product.inStock);
      const productNames = result.map(product => product.name);
      
      console.log(productNames); 
      