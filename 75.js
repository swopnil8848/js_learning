const user1 = {
    firstName : "harshit",
    age: 8,
    about: ()=>{
        console.log(this.firstName,this.age)
    }
}
// arrow funciton ma this kailey ni kam gardaiana

user1.about();