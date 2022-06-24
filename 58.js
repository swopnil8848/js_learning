// filter method

const numbers = [1,2,3,4,5];

// call back functionof filter function 
// const iseven = ((number)=>{
//     return number%2===0;  
//     // callback function of filer will always return boolean value true or false, if it reutrns true it will be added to the list and if it is false it wont be added to the list
// } )

const evennumbers = numbers.filter((number)=>{
    return number%2===0; 
});
console.log(evennumbers);