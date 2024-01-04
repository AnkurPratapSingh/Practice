const express = require('express')
// can use import of es6 by mjs extension or write "type":"module" in pakage.js

const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send('Hi this is Ankur')
})

app.listen(port,()=>{
    console.log("Hi i am listening")
})