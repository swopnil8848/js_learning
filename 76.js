// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }
// }

// we can write about as function and it will still be a key value pair
const user1 = {
    firstName : "harshit",
    age: 8,
    // we can just do this and it will work same as above
    about(){ 
        console.log(this.firstName,this.age)
    }
}