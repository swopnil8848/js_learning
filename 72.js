// console.log(this);

function myFunc(){
    // "use strict"
    // console.log(this);
    console.log(this)
}
window.myFunc();
// writting myFunc() and writting window.muFunc() is same when we create myFunc the function added into windo, so when we do console.log(this) it will show up all the function in windows as this points towards windows and conosle.log will print it out for us