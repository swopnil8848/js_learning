const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = Object.create(obj1);
// the above line means we are creating an pbject name obj2 and creating pass obj1 as __proto__ so obj2 can acess the key value pair of obj1

// acessing the key value pair  of obj1 using obj2
console.log(obj2.key1);
// we can do this cuase we did obj2 = Object.create(obj1); this means creating obj2 pasiing obj1 in it as __Proto__ so we can acess keyvalue pair of obj1 using obj2
obj2.key3 = "value3";
// __proto__ is simply a memory refernce we pass into a object so that object can acess the methods of the key value pair of that object
console.log(obj2.__proto__)
console.log(obj2);