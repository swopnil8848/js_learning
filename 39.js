// compute variable

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// we cannot do following things
// const obj={
//     objkey1 = value1;
//     objkey2 = value2;
// }

// const obj = {
//     [key1] : "my name",
//      // here this key value pair is differnt form the above varibale. this key1 is 
//     [key2] : value2
// }

console.log("this is same as writting above program");
const obj= {};u
obj[key1] = value1;
obj[key2] = value2;
console.log(obj)