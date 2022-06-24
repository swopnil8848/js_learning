// Map() data type

// in object our key can be only stirng but in map the key may be a string, number, or even array and object itself

// const for_object = new Object();
// for_object.firstname = "swopnil";
// console.log(for_object)
// well but we cannot add keyvalue pair inside the map like this, we need to use set method to add inside map method



const person = new Map();

person.set('firstname','swopnil');
person.set('age',7);
person.set(1,'one');
person.set([1,2,3],'one two three')
person.set({1:'one'},'one')

// we cannot acess the data of the map like we did in the object cause we need to use get operator to acess the value of the map

// console.log(person.get(1));

// >>>>>>>>>>>ERROR(undedfined)<<<<<<<<<<<<
// console.log(person.get([1,2,3]))
// well but we cannot acess the vlaue of the map using array as key so isnt it useless

// this will print all the keys in form of mapitterator sth 
// console.log(person.keys('one'))

// to print out all the keys of map 
// for(let key of person.keys()){
//     console.log(key,typeof key)
// }

// we can use for of loop inside map and it will give us the each key value pair in array
// so if we want to store the key and value of the keyvalue pair of map we wiil need to destruct the array
// for(let key of person){
//     console.log(key);
//     console.log(Array.isArray(key));
// }

// the square bracket we see there works as destructring element 
// for(let [key,value] of person){
//     console.log(key,value);
// }

// we cannot acess Map with index
// console.log(person[2]);

// console.log(person);

const person1 = {
    id:1,
    firstname:"Swopnil"
}
const person2 = {
    id:2,
    firstname:"king"
}

const extrainfo = new Map();
extrainfo.set(person1,{age:8,gender:
"male"});  // so this is like hidden infromation and that anyone can see
extrainfo.set(person2,{age:9,gender:"female"});

console.log(person1.id);
console.log(extrainfo.get(person1).gender);
console.log(extrainfo);  // we wont be shown the contents of the extrainfo that we set for person1 and person2 object so its like hidden memorey of person1 that needs to be acessed through new special command 
// extrainfo.get(person1).gender
console.log(extrainfo.get(person2).age);
console.log(extrainfo.get(person2).gender);



