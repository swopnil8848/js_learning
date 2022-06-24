// function expressions

const findtarget=function (array1,target){
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
