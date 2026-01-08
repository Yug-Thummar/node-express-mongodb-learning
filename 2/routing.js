// what is routing : it is a process of selecting path for traffic in a network or between or across multiple networks.
let express = require("express");
const nodemon = require("nodemon");

let app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`port server is start now : ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hii My name is Yug");
});

app.get("/page", (req, res) => {
    res.send("This is the page site");
});

app.get("/this", (req, res) => {
    res.send("This is the this site");
});

app.post("/home", (req, res) => {
    res.send("This is the home site");
});
