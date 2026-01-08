const express = require("express");
const path = require("path");
const app = express();

let port = 8000;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
// whenever i run the server in delta directory ejs file not working. ejs file work for use path.join(__dirname."/views") reuire path packages
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // path.join function join the 2 paths.  __dirname : current working directory "delta3.0/32/views"

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    // think data send to the database 
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { data: diceVal }); //passing data to ejs: object created and pass the key and value.value like a variable.
});

app.get("/ig/:username", (req, res) => {
    // const followers  = ["yug", "bhavesh", "krishna", "utsav"];
    // let { username } = req.params;
    // res.render("instagram.ejs", { username, followers });
    const instaData = require("./data.json");
    const { username } = req.params;
    const data = instaData[username];
    res.render("instagram.ejs",{ data });
});