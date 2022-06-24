// lexical scope
let var1 = "i am the king"
const first = function(){
    const sec = function(){
        var var2 = "go to hell"
        const third = function(){
            console.log(var1);
            // last();

        }
        console.log("hello world")
        third();
    }
    // const last= function(){
    //     console.log(var2);
    // }
    sec();
}

first();
console.log(var2);