const array1 = [1,2,3];
const array2 = [5,6,7];
// const new_array = [...array1,...array2,67];
const new_array = [..."123"];
console.log(new_array);

// spread operator inobjects
const obj1 = {
    key1:"value1",
    key2:"vakue2",
};
const obj2 = {
    key3:"value3",
    key4:"vakue4",
};
const newobj = {...obj2,...obj1,key65: "value69"}
console.log(newobj);

niw = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(niw)