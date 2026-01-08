// module.export.sum = (a,b)=> a + b ;
// module.export.mul = (a,b)=> a * b;
// module.export.g = 9.6;
// module.export.PI = 3.14;

const sum = (a,b)=> a + b ;
const mul = (a,b)=> a * b;
const g = 9.6;
const PI = 3.14;

const obj = {
    sum : sum,
    mul : mul,
    g : g,
    pi : PI
}
module.exports = obj;