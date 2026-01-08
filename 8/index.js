const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main()
    .then((res) => {
        console.log("Connection successfully");
    })
    .catch((err) => {
        console.log("err");
    });

const userShema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userShema);
const Employee = mongoose.model("Employee", userShema);

// how to insertdata in mongodb
// const user1 = new User({
//     name : "yug",
//     email : "yugthummar563@gmail.com",
//     age : 19
// });

// const user2 = new User({
//     name : "utsav",
//     email : "utsavsaravaliya45@gmail.com",
//     age :20
// })

// user1.save(); //how to store the data in mongodb

// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// multiple user insert
// User.insertMany([
//     { name: "bavanji", email: "bavanjiutadiya432@gmail.com", age: 21 },
//     { name: "krishna", email: "krishnaradadiya432@gmail.com", age: 22 },
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

User.insertMany([
    { name: "bavanji", email: "bavanjiutadiya432@gmail.com", age: 21 },
    { name: "krishna", email: "krishnaradadiya432@gmail.com", age: 22 },
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// find
// User.find({age : {$gt : 20}})
// .then((res)=>{
//     console.log(res[0].age);
// }).catch((err)=>{
//     console.log(err);
// });

//findone
// User.findOne({age : {$eq : 20}})
// .then((res)=>{
//     console.log(res.age);
// }).catch((err)=>{
//     console.log(err);
// });

// findById
// User.findById("6879d0f852684bdee32f5d6f")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// updateOne(<filter>,<query>)
// User.updateOne({name : "yug"},{name : "ayush"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// updateMany(<filter>,<query>)
// User.updateMany({age : 20},{age : 26})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// findOneAndUpdate()
// User.findOneAndUpdate({age : 26},{age : 27})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// findByIdANDupdate
// User.findByIdAndUpdate("6879d0ee8ff2a54b40452142",{age : 27})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// deleteOne
// User.deleteOne({name : "ayush"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// deleteMany
// User.deleteMany({name : "utsav"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// findOneAndDelete
// User.findOneAndDelete({name : "yug"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateOne({name : "krishna"},{age : 19}).then((res)=>console.log(res)).catch((err)=>{console.log(err)});

// findByIdAndDelete
// User.findByIdAndDelete("6879da7e2f4c02c7e5f8e8a5")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })