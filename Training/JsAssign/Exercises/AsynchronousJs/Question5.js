// .Implement a function that uses Promise.all to make multiple asynchronous 
// requests concurrently.

async function fetchMultipleUrls(urls) {
    try {
        const promises = urls
        const responses = await Promise.all(promises);

        const data = await Promise.all(responses.map(response => response.json()));

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const urls = [
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2'),
    fetch('https://jsonplaceholder.typicode.com/posts/3')
];

fetchMultipleUrls(urls)
    .then(data => {
        console.log(typeof data)
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
