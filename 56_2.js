// for each creating fucntion inside foreach()

const users = [
    {firstname:"harshit",age:23},
    {firstname:"swopnil",age:18},
    {firstname:"krisha",age:20},
    {firstname:"monk",age:300},
]

const newusers = [1,2,3,4,5,6];
newusers.forEach((user,index)=>{
    // console.log(typeof(user));
    // console.log(user.firstname);
    console.log(user,index);
})

users.forEach(function(user,index){
    console.log(user,index);
    console.log(user.firstname);
})
// for(let user of users){
//     console.log(typeof(user));
//     console.log(user.firstname)
// }