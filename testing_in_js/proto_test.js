function createUser(firstName, lastName, email, age, address){
    // so here we pass the prototype free space of createuser funciton into the user object for user to acess the key value pair of  user
    const user = Object.create(createUser.prototype);
    
    // const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
console.log(user1.is18());