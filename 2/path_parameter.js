let express = require("express");
const nodemon = require("nodemon");

let app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`port server is start now : ${port}`);
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let h1 = `<h1>Hello My name is ${username}. and id is ${id}</h1>`;
    res.send(h1);
});