// reduce method

const numbers = [1,2,3,4,5,10];
// using recude method to sum the numbers in the array
// function sum1(accumulator,current){
//     return accumulator+current;
// }
// const adding = numbers.reduce(sum1);
// console.log(adding);

// const adding = numbers.reduce((accumulaotor,current)=>{
//     return accumulaotor+current;
// })

// console.log(adding);

flipcard = [
    {productid:1,product:"laptop",price:12300},
    {productid:2,product:"mobile",price:4000},
    {productid:3,product:"tv",price:20000},
]

const totalamount=flipcard.reduce((accumulator,current)=>{
    return accumulator + current.price;
},0)

// accumulaotr   current.price   return 
// 0             12300        12300
// 12300         4000         12300+4000=16300
// 12600         20000        36300
console.log(totalamount);
