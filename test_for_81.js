let a= "anything";
function hello(){
    namea = "wilnk"
    console.log("this function is running");
    function blinka(){
        
        a = `${this.namea} i am a`;
        console.log("i ma blink")
        return a;
    }
    return blinka();
}
// console.log(hello());
a1 = hello();
console.log(a1.blinka.a);

// hello() will call the function first,
// console.log(hello()) will then print out what the function hello() is returning 
// so it will be like writing console.log(blinka()) and the it will print whatever the function blinka() is returning which is a in above case but before that blinka() function is called which has print out "i am blink" from form blinka

// console.log(hello.blinka)

// so now the ques is how do we acess a of nested function