// sets (it is iterable)
// store data
// sets also have its own methods

// const numbe = new Set([1,2,3]);
// numbe.add(4);
// numbe.add(19);
// numbe.add(4);
  // we cannot add two same  things in set

// numbe.add(['item1','item2']);
// numbe.add(['item1','item2']);  
// the set will add both the array even if the array are same now cause now both the array hold different location in the memeory

//  but we cannot do sth like 
// const items = ['item1','item2']
// numbe.add(items)
// numbe.add(items)
//  this will add the array just once in the set cause both the array will hold same memory adress in the array
const myarray = [1,3,4,5,6,5,6];
const uniqueElements = new Set(myarray);
// here we converted the Set named uniqueElements and added all the contents of myarray into uniqueElements set and this set will remove all the repeating elements form the array when set is created 
console.log(uniqueElements);
// console.log(myarray);

let length = 0;
for(let element of uniqueElements){
    length++;
}  
// we need to write this whole for of  loop to  find the length of the set
console.log(length);

// console.log(numbe);
