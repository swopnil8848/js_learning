// console.log("happy birhtday to you.....");
// console.log("happy birhtday to you.....");

// function sing(){
//     console.log("happy birthday to yo....");
// }

// sing();

// function iseven(number){

// function firstchar(anystring){
//     return anystring[0];
// }

// console.log(firstchar("abc"))


function findtarget(array1,target){
    // console.log(array1.length)
    // console.log(array1[2])
        
    for(let i=0 ;i<array1.length;i++){

        // console.log(array1[i])
        if(array1[i]===target){
            // console.log(i)
            return i;
        }
    }
        return -1;
    
}

const myarray = [1,2,3,60];
const ans = findtarget(myarray,3);
console.log(ans);


