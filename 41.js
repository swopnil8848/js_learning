// object destructituring

const band = {
    bandname : "led zepplin",
    famoussong:"stairway to heaven",
    year : 1968,
    another : "bon"
};

// const bandname = band.bandname;
// const famoussong = band.famoussong;

// // bandname = "queen";
// console.log(bandname,famoussong);

const {bandname,famoussong: var2,...respropes} = band;
console.log(bandname);
console.log(var2);
// console.log(famoussong); this will show and error cause we stroed famoussong varaible as var2

console.log(band.year);  // this is how we normally acess key value pair of the object
console.log(respropes); 
// this will print respropers as new object
