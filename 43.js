const users = [
    {userID: 1,firstname:"harshit",gender:"male"},
    {userID: 1,firstname:"swopnil",gender:"male"},
    {userID: 1,firstname:"sanjel",gender:"male"}, 
]

const [{userID,firstname:name1, gender} , ,{firstname}] = users;
// const [{userID,, gender} , ,{firstname}] = users;
// this will show errror directly cuase we are not allowed to leave comman after the userID in object
// const [{userID,name1, gender} , ,{firstname}] = users;  // this one wont give results for name1, ot nth will be sotred in name 1

console.log(userID);
console.log(gender);
console.log(name1);
console.log(firstname);
