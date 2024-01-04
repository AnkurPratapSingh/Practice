// Develop a function that fetches data from two different APIs and combines the 
// results


const url1="https://jsonplaceholder.typicode.com/posts/1";
const url2="https://jsonplaceholder.typicode.com/posts/2";

fetchData();

async function fetchData(){

const res1 = await fetch(url1);
const res2 = await fetch(url2);

const arr = [ await res1.json() , await res2.json()];

console.log(arr);


}