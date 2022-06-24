function createUser(firstname,age){
    this.firstname = firstname;
    this.age = age
}
const about = function(){
    console.log(this.firstname,this.age);
    
}
createUser.bind(about)
console.log(createUser);
const user1 =  new createUser("saurav",34);
console.log(user1.firstname)
let a="gadha"
const hello={
    a:"hi",
    hellow:function(){
return this.a    }
}
console.log(hello.hellow());

