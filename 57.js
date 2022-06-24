// map method

const numbers = [1,2,35,6];

// const square = function(number,index){
//     return `${number * number},${index}`;  // this will store the returned values if we use map
// }

const squareNumber = numbers.map((number,index)=>{
    console.log("i am swopnil");
    return `squarenumber ${number * number},${index}`;  // whateevr use rertrun in using mag method it will be stored as array
});
console.log(squareNumber);