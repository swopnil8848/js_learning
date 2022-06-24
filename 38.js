console.log("i am swopnil");
const person = {
    name: "harshit",
    age: 22,
    "person hobbies":["guitar","sleeping","listening song"]
}

// for in loop
// for(let key in person){
//     console.log(key);
//     console.log(`${key}:${person[key]}`)
// }

// console.log((person));
// console.log(Object.keys(person));
// console.log(Object.values(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
    console.log("\n \n");
    console.log(key);

}
