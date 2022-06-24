//  why do we use call back function when we can just simply call the function inside of the fucniton with its name inside other fucntion easily

// function myfunc(){
//     myfunc2("hell");
//     console.log("hello world");
// }
function myfunc(callback){
    callback("hell");
    console.log("hello world");
}

function myfunc2(name){
    console.log("inisde my func2");
    console.log(`name is ${name}`);
}
myfunc(myfunc2);