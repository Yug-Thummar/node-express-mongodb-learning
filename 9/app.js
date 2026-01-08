const express = require("express");
const app = express();

app.listen(3030,()=>{
    console.log("listening to the server: 3030");
});

app.use((req,res,next)=>{
    // let {query} = req.query;
    // console.log(query);
    console.log("Hii i am 1st middleware!");
    return next();
    // console.log("Hello I am next function after execution");  -->next function write after not write a code
});

app.use((req,res,next)=>{
    console.log("Hii i am 2nd middleware!");
    next();
});

// logger
app.use((req,res,next)=>{
    req.time = new Date(Date.now());
    console.log(req.method);
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.time);
    next();
});

app.use("/random",(req,res)=>{
    console.log("This is the only for random site");
});

app.get("/",(req,res)=>{
    res.send("I am a root");
});

app.get("/random",(req,res)=>{
    res.send("This is the random root");
});