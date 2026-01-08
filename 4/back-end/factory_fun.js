// a function that creates a object

// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`My name is ${this.name}`);
//         }
//     };
//     return person;
// }
// let p1 = personMaker("Yug",18); //copy 
// let p2 = personMaker("Utsav",19); //copy 
// p1.talk === p2.talk;
// false

// constructor -does'nt return anything & start with the capital
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// Person.prototype.personname = ()=> {
//     console.log(`My name is ${this.name}`);
// }
// let P1 = new Person("Yug",18);
// let P2 = new Person("Utsav",19);
// P1.personname === P2.personname
// true

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(this.name);
        console.log(this.age);
    }
}
// let p1 = new Person("Yug",19);