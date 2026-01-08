const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listing to port : ${port}`);
});

let posts = [
    {
        id : uuidv4(),
        username : "Yug",
        content : "I love coding"
    },
    {
        id : uuidv4(),
        username : "Utsav",
        content : "Hard work is important achieve to success"
    },
    {
        id : uuidv4(),
        username : "Krishna",
        content : "I got the the select for my first internship in 'APPLE'"
    }
]

// create a home tamplete
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

// create a form 
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

// show indivisual post
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
}) 

// create a new post
app.post("/posts",(req,res)=>{
    let {username , content } = req.body;
    let id = uuidv4();
    posts.push({username,content,id});
    res.redirect("/posts");
})

// edit a content 
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
})

// delete a post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
})