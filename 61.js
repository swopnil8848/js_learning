// find method

const array1 = ["make","create","bored","why"];

// function length3(first){
//     return first.length==3;
// }
// const ans = array1.find(length3);
// console.log(ans)
        // (shortcut)
// const ans = array1.find((first)=>first.length===3);
// console.log(ans);

const users = [
    {userid:1,username:"harsit"},
    {userid:2,username:"krish"},
    {userid:3,username:"swopnil"},
    {userid:4,username:"ujan"},
    {userid:5,username:"manjit"},
];
function myuser(user){
    return user.username.length===5;
}

// const myuser1 = users.find(myuser);
// console.log(myuser1);

const myuser1 = users.find((user)=>{
    return user.username.length ==5;
})
// here user is a fixed array(what is mean is==>)
// first user will be users[0]
// for second user will be users[1]
// for third user will be users[2]
// and so on tille the end of the array so wehn we write user.username.length its same as writting users[x].username

// const myuser = users.find((user)=>user.userid===3);
console.log(myuser1);