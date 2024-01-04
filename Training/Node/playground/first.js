const fs = require('fs');

const book ={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('first.json',bookJson);

const dataBuffer = fs.readFileSync('first.json')
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);
data.title = "Ego is not the enemy";
 const bookJson = JSON.stringify(data);
 fs.writeFileSync('first.json',bookJson);
