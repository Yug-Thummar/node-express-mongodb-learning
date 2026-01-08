const mongoose = require('mongoose');

main()
    .then(()=> "connection successfully!")
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log("Connected to MongoDB");
}  

const orderSchema = new mongoose.Schema({
    item: String,
    price : Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
    ],
});

customerSchema.post('findOneAndDelete', async(data)=>{
    if(data.orders.length){
        await Order.deleteMany({ _id: { $in: data.orders } });
        console.log("Orders are also deleted");
    }
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const createOrder = async () => {
    const result = await Order.insertMany([
        { item: 'Laptop', price: 1200 },
        { item: 'Phone', price: 800 },
        { item: 'Tablet', price: 600 },
    ]);
    console.log(result);
}
// createOrder();

const createCustomer = async () => {
    const customer1 = new Customer({
        name: 'Alice',
    });
    let order1 = await Order.findOne({ item: 'Laptop' });
    let order2 = await Order.findOne({ item: 'Phone' });
    let order3 = await Order.findOne({ item: 'Tablet' });
    customer1.orders.push(order1);
    customer1.orders.push(order2);
    customer1.orders.push(order3);
    let result = await customer1.save();
    console.log(result);
}
// createCustomer();

const addCustomer = async () => {
    let newOrder = new Order({
        item: 'Monitor',
        price: 300,
    });
    let newCustomer = new Customer({
        name: 'Bob',
    });
    newCustomer.orders.push(newOrder);
    await newOrder.save();
    await newCustomer.save();
    console.log(newCustomer);
}
// addCustomer();

const deleteCustomer = async () => {
    let data = await Customer.findByIdAndDelete('68c67eeb9928128267854d94');
    console.log(data);
}
deleteCustomer();