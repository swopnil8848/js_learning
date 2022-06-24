function createUser(firstname,lastname,email,age,adress){
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    user.about = function(){
        return `${this.firstname} is ${this.age} years old`;
        };
    user.is18 = function() {
        return this.age >= 18;
        
    }
    return user;
}

const user5 = createUser("swopnil","maharjan","anything",19,"patan");
console.log(user5);
const ishe = user5.is18();
const about = user5.about();
console.log(about);
console.log(ishe)