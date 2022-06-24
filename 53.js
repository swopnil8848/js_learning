// parameter destructuring

const person = {
    firstname :"harshit",
    gender:"male",
}

// function printdetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }
function printdetails({firstname,gender}){
    console.log(firstname);
    console.log(gender);
}



printdetails(person);