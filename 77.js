// const user1 = {
//     firstname : "harshit",
//     lastname:"maharjan",
//     email: "swopnilm515@gamil.com",
//     age:2,
//     adress:"pathandokha",
//     about: function(){
//         return `${this.firstname} is ${this.age} years`
//     },
//     is18 () {
//         return this.age >= 18;
        
//     }
// }

// function (that function creates object)
// add key value pair
// reutrns object

function createUser(firstname,lastname,email,age,adress){
    const user = {};
    user.firtsname = firstname;
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

const user5 = createUser("swopnil","maharjan","anything",16,"patan");
console.log(user5);
const ishe = user5.is18();
// ishe will store the value returened by user5.is18() which is true or flase
console.log(ishe)