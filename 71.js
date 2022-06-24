// methods
// function indide object

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    return ()=>console.log(`person name is ${this.firstName} and person age is ${this.age}`);
};
const person1 = {
    firstName : "harshit",
    age: 8,
    about : personInfo
    // about : personInfo(); if we dont this then the function is called separately and from person so.. it wont this wont store person1 
}
// const person2 = {
//     firstName : "harshit",
//     age: 8,
//     about : personInfo()
// }


// console.log(person1.about);

person1.about();
console.log(person1.age);
// person2.about;
// console.log(person.about);