// Use the Fetch API to retrieve data from a JSON placeholder and display it on a 
// webpage

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
