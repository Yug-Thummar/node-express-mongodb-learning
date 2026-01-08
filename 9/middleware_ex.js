const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.listen(3030, () => {
    console.log("listening to the server: 3030");
});

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// app.get("/api",(req,res)=>{
//     res.send("data");
// });

let checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    throw new ExpressError(401, "ACCESS DENIND!");
}
app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/wrong", (req, res) => {
    abc = abc;
})

// app.use((err,req,res,next)=>{
//     console.log("-----ERROR-----");
//     // next(); that means non-error handling middleware function call  
//     next(err);  //that means error handling middleware call
//     // res.send(err);  //send the error message as object
// });

// app.use((err,req,res,next)=>{
//     console.log("-----ERROR-----");
//     next(err);
// })

app.use((err, req, res, next) => {
    let { status = 503, message = "some error occurred!" } = err;
    res.status(status).send(message);
});

app.get("/admin", (req, res) => {
    throw new ExpressError(505, "Access to admin forbidden!");
});