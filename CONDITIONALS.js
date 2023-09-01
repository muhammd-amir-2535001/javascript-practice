//Single if statement
/*var age = 4;
if (age > 18) {
  console.log("you can drink rasna water");

} 
// Double if-else Statement
if (age > 18) {
  console.log("you can drink rasna water");

} else {
  console.log("you can not drink rasna water");

} 
//Multipel if,else_if ststement
*
var age = 23;
if(age > 32){
    console.log("you are not a kid");
}
else if(age > 26){
   console.log("bachhe nhi rahe ab tum");

}
else if(age > 22){
  console.log("yes bachhe nhi rahe");
}
else if(age > 18){
    console.log("18 Bachhe nahi rahe");

}else{
    console.log("Bachhe rahe");
}

//          LOOPS
//for loops
var arr = [1,2,3,4,5,6,7,8,9,10];
//console.log(arr)
for(i=0;i<=arr.length;i++){
    console.log(arr[i]);
}
// forEach
var arr = [1,2,3,4,5,6,7,8,9];
arr.forEach(function(element){
    console.log(element)
})

var a = [1,2,3,4,5,6,7,];
a.forEach(function(e){
    console.log(e);
})

//while loop
var arr = [1,2,3,4,5];
var j = 0;
while(j<arr.length){
console.log(arr[j]);
j++;
}

var arr1 =["amir","lalkhan","Ali","raja"];
var j = 0;
while(j<arr1.length){
    console.log(arr1[j]);
    j++;
}

// do while
var arr3 = [9,8,7,6,5,4,3,2,1,];
var j=0;
do{
console.log(arr3[j]);
j++;
}while(j<arr3.length);

// string methods
let myLoveString = "Amir is a good boy goog good";
d=myLoveString.replace("Amir","lalkhan");
e=d.replace("good","bad");
console.log(myLoveString);
console.log(d);
console.log(e);

//       DATE
myDate = new Date();
console.log(myDate);
*/
//   DOM Manipulation
//  let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "red";
// console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText);
// tn=document.getElementsByTagName("div")
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = 'This is a created para';
// tn[0].appendChild(createdElement); 
//         Arrow Function
// var a=2;
// var b=3;
// function summ(a,b){
//   return a+b;
// }
// summ(21,21);
// // console.log(summ);
// summ = (a,b)=>{
//   return a+b;
// }
// console.log(summ(10,10));
//       json
obj = {name:"amir",length:1}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);