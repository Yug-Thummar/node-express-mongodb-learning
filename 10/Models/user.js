const mongoose = require('mongoose');


main()
    .then(()=> "connection successfully!")
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MyDatabase');
    console.log("Connected to MongoDB");
}  

const userSchema = new mongoose.Schema({
    userName: String,
    address: [
        {
            location: String,
            city: String,
            _id : false,
        },
    ]
});

const User = mongoose.model('User', userSchema);

const createUser = async () => {
    const user1 = new User({
        userName: 'JohnDoe',
        address: [
            { location: '123 Main St', city: 'New York' },
            { location: '456 Maple Ave', city: 'Los Angeles' }  
        ]
    });
    user1.address.push({ location: '789 Oak St', city: 'Chicago' });
    let result = await user1.save();
    console.log(result);
};
createUser();