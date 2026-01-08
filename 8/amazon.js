const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
    .then((res) => {
        console.log("Connection successfully");
    })
    .catch((err) => {
        console.log("err");
    });
    
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [1,"price is too low for amazon selling"]
    },
    category : {
        type : String,
        enum : ["fiction","non-fiction"]
    }
});

const book = mongoose.model("book",bookSchema);

// const book1 = new book({
//     title : "On the Origin of Species",
//     author : "Charles Darwin",
//     price : "-300",
//     category : "fiction"
// })
// book1.save();

book.findByIdAndUpdate("687a1c7ae874f643f5c370a7",{price : -39},{runValidators : true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
})