// every method

// const numbers = [2,3,4,5,6];

// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

flipcard = [
    {productid:1,product:"laptop",price:12300},
    {productid:2,product:"mobile",price:4000},
    {productid:3,product:"tv",price:20000},
]

// every method le sabai condition true bhayo bhaney true return garxa natra false return garxa and nth else
const isit = flipcard.every((cartitem)=>cartitem.price<30000);
console.log(isit);