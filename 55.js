// function returning fucntion

function myfunc(){
    function hello(){
        console.log("hello world")
    }
    return hello;
}

const ans = myfunc();
ans();  // ans = hello so ans() == hello()