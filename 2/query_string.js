let express = require("express");
const nodemon = require("nodemon");

let app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`port server is start now : ${port}`);
});

app.get("/search",(req,res)=>{
    let {q} = req.query;
    res.send(`<h1>Search result for query: ${q}</h1>`);
});