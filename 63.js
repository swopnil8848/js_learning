// some method
// const numbers = [2,7,5,9];

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

flipcard = [
    {productid:1,product:"laptop",price:12300},
    {productid:2,product:"mobile",price:4000},
    {productid:3,product:"tv",price:20000},
]
// yeuta ni result true aayo bhaney the answer is true sabai ans false ayo bhaney matra ans is false

const ans = flipcard.some((item)=>item.price<=4000);
console.log(ans);



