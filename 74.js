const user1 = {
    firstName : "harshit",
    age: 8,
    about: function anyway(){
        console.log(this.firstName,this.age)
    }
}
// this will give us result undefined as its just we are just calling the user1 function and storing it myfunc
// const myFunc = user1.about;

// so the value of this wont be passed showing it undefined 
// we can use bind method instead
// user1.about = function(){
//     console.log(this.firstName,this.age)
// }

const myFunc = user1.about.bind(user1);

myFunc();