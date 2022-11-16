// var firstname;
// var lastname;

// firstname = prompt("enter first name : ");
// lastname = prompt("enter last name");


// console.log(firstname);
// console.log(lastname);

var oops;
var maths; 
var english;
var phy;
var total;
var per ;



oops = + prompt("enter oops marks : ");
maths = + prompt("enter maths marks : ");
english = + prompt("enter english marks : ");
phy =  + prompt("enter physics marks : ");



total = oops + english + maths + phy;
per = (total/400)*100;


console.log(oops);
console.log(maths);
console.log(english);
console.log(phy);
console.log("total marks = ",total);
console.log("percentage = ",per);