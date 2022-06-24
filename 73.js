// function hello(){
//     console.log("hello word");
// }
// hello.call();
// call apply bind
function about(hobby,fav){
    console.log(this.firstName, this.age, hobby, fav)
}
const user1 = {
    firstName : "harshit",
    age : 8,
    // about: function(){
    //     console.log(this.firstName, this.age)
    // }
}
const user2 = {
    firstName : "mohit",
    age:9
}
// user1.about.call(user2);
// about.call(user1)
// about.call(user2,"guitar","batch");

// apply
// apply method and call method are similar we pass the data into array in apply whearas we normally pass data into function side by side
about.apply(user1,["guitar","batch"]);

// bind method returns function passing value for 'this' keyword(it returns function name  after passing user2 in palce for this )
const func = about.bind(user2,"guitar","bach");
func();
