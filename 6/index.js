const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_learn',
    password: 'root123'
});
// function createRandomUser() {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }
// console.log(createRandomUser());


// let q = "SHOW TABLES";
// let q = 'INSERT INTO user (userid,username,email,password) VALUES (?,?,?,?)';
// let user = [1,"Yug","yugthummar563@gmail.com","Yug@1234"];
// let q = 'INSERT INTO user (userId,username,email,password) VALUES ?';
// let users = [
//     [2,"Bavanji","bavanjiutadiya12@gmail.com","Bavanji@1234"],
//     [3,"utsav","utsavsaravaliya34@gmail.com","Utsav@123"],
// ];
// try{
    // connection.query(q, [users],(err, res) => {
    //     if (err) throw err;
    //      console.log(res);
    //      console.log(res.length);
    //      console.log(res[1]);
    // });
// }
// catch(err){
//     console.log(err);
// }
// connection.end();

function createRandomUser() {
     return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
     ];
}
let data = [];

for(let i = 1; i<=100; i++){
    data.push(createRandomUser());
}
let q = 'INSERT INTO user (userid,username,email,password) VALUES ?';
try{
    connection.query(q,[data],(err,res)=>{
        if (err) throw err;
        console.log(res);
    });
}catch(err){
    console.log(err);
}
connection.end();