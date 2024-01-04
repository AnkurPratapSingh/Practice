// Write a function that takes a list of URLs and fetches their content concurrently 
// using Promise.all




const axios = require("axios");


const fetchNames = async () => {
    try {
        const res = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/todos"),
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);

        const todos = res[0].data;
        const posts = res[1].data;
        const users = res[2].data;

        console.log("Todos:", todos);
        console.log("Posts:", posts);
        console.log("Users:", users);
    } catch (error) {
        console.error("Error:", error);
    }
};

fetchNames();
