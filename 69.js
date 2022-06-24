// clone using object.assign

// memory

const obj = {
    key1 : "value1",
    key2 : "value2"
}
// this is desconstruction the obj of the when we do {...obj} else the obj2 and obj will hold the same memorey adress so if we change sth in array 
// so we did object cloning here as we can see obj2 is created and we have cloned key value pair of obj into obj2
// const obj2 = {...obj};

// or we can do the object cloning useing assign method
const obj2 = Object.assign({},obj);

// >>>>>>>try using cloning like this too<<<<<<
// const obj2 = new Object();
// obj2.add(obj);

obj.key3 = "value3";
console.log(obj);
console.log(obj2);