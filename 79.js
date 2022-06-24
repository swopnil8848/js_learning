const userMethods = {
    about : function(){
        return `${this.firstname} is ${this.age} years old`;
        },
    is18 : function() {
        return this.age >= 18;
        
    }
}
function createUser(firstname,lastname,email,age,adress){
    const user = Object.create(userMethods);
    // const user = new Object();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    // user.about= userMethods.about;
    // user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("swopnil","maharjan","anything",19,"patan");
const user2 = createUser("harsh","maharjan","anything",19,"patan");
const user3 = createUser("mohit","maharjan","anything",19,"patan");
console.log(user1.about());
console.log(user1);
// console.log(user1.__proto__)
console.log(user3.is18());