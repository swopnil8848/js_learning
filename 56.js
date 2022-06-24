//  important array methods

const numbers = [4,3,5,6];

function muntiplyby2(index,number){
    console.log("index is ",index);
    console.log(number*2);
}

// muntiplyby2(numbers[0],0)
// muntiplyby2(numbers[1],0)
// muntiplyby2(numbers[2],0)
// muntiplyby2(numbers[3],0)

// for(let i =0;i<numbers.length;i++){
//     muntiplyby2(numbers[i],i);
// }


numbers.forEach(muntiplyby2);