// let array1 = [1200,3000,450,23,90];
// const array2 = array1.sort((a,b)=> a-b);
// console.log(array2);

flipcard = [
    {productid:1,product:"laptop",price:12300},
    {productid:2,product:"mobile",price:4000},
    {productid:3,product:"tv",price:20000},
]

const array2 = flipcard.slice(0).sort((a,b)=>(a.price-b.price));
// using slice there doesnt make a diffenence unless we want to arrange only certain products and not all

console.log(...array2);