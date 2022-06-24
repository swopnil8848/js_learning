// splice method

const myarray = ["item1","item2","item3","item4","item5","item6","item7","item8","item9"];

// delete
// const deleteditem = myarray.splice(1,1);

// insert
// myarray.splice(1,0,'inserted item');
// console.log(deleteditem)

// insert and delete
console.log(myarray);
const deletedItem=myarray.splice(1,5,"insert1");
// starting form 1 delete 5 items in array and just insert "insert1" int the array
console.log(myarray);
console.log(deletedItem)