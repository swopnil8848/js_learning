// sets (it is itterable)
// store data
// sets also have its own methods
// no index-based acess
// order is not guranted
// unique items only(no dubplicates allowed)

// const items = ["item1","item2","item3","item4",]
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(items);
// // console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }

const ids =new Set();
const myarray = [1,2,3,5,6,5,7,6];
const newset =new Set(myarray);
// new keyword is compulasry whle creating the set

// we cannot use length property in set
// console.log(newset.length)

// we cannot acess the set using index either
// console.log(newset[3]);

// but we can use for of loop to acess the items of set and also use it to display lentgh of the set done in 67.js


console.log(newset);