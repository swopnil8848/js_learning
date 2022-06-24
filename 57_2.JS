const users = [
    {firstname:"harshit", age:23},
    {firstname:"mohit",age:21},
    {firstname:"king",age:20},
    {firstname:"billy",age:50},
]

const userNmaes=users.map((user)=>{
    return user.firstname;
})

console.log(userNmaes);