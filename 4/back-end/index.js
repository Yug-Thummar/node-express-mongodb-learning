const express = require("express");
const app = express();

let port = 8080;
app.listen(port,(req,res)=>{
    console.log(`Server start from ${port}`);
});

app.use(express.urlencoded({extended:true})); //if i do not defined this middleware by default req.body give me undefined. i can say's this data readeble formate
app.use(express.json());

app.get("/:register",(req ,res)=>{
    let {name,pass} = req.query;
    res.send(`Welcome your name is ${name} and your password is ${pass}`);
});

app.post("/:register",(req,res)=>{
    let {name,pass} = req.body;
    res.send(`Standard post response.welcome ${name} and your password is ${pass}`);
}); 

// object prototypes : prototypes are the machanism by which javascript objects inherit features from one another.
// it is like a single template object that all object inherit methods and properties from without having their own copy.
// arr.__proto__ (reference)
// Array.prototype(actual object)
// String.prototype

// __proto__<--this proto is reference prototype.
// example : 
// let arr = [1,2,3];
// console.log(arr);
// [1, 2, 3]
// arr.__proto__.sayHello = (n)=>{console.log("Hii,Hello",n);}
// arr.sayHello(4);
// Hii,Hello 4

// let arr1 = [1,2,3];
// let arr2 = [1,2,3];
// arr1.sayHello(){
// console.log("hello"); -->sayHello function own copy in memory
// }

// arr2.sayHello(){
// console.log("hello");  -->sayHello function own copy in memory
// }

// arr1.sayHello === arr1.sayHello
// false
// "xyz".toUpperCase() === "abc".toUpperCase()
// true

// every object in javascript has a built-in prototype ,which is called its prototyoe.the prototype is itself an object,so the prototype will have its own prototype,making what's called a prototype chain the chain ends when we reach a prototype that has null for its own prototype.