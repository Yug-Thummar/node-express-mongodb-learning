const express = require("express");
let app = express(); //express is a function or store the app variable and app is object 
let port = 3030; //port are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.defualt port is mainly two 3000 or 8080
app.listen(port,()=>{ //listen means "Your server is waiting for requests on a specific port."
    console.log(`port server is start now : ${port}`);
});
// -->output : server is start but not response.  Cannot GET /

app.use((req,res)=>{ //use all request listen 
// What is the use() function in Express.js?
// In Express.js, app.use() is used to:
// Add middleware to your app. 
// 🔸 But what is middleware?
// 🧠 Middleware is a function that runs before the final response is sent to the user.
    console.log("request recieved!");
    //-->sending a response
    // console.log(req);  //only one time request send 
    // res.send("Hello world!");
    // res.send({
    //     name : "Apple",
    //     color : "red",
    // });
    let info = "<h1>Hello world!</h1>";
    res.send(info);
});
