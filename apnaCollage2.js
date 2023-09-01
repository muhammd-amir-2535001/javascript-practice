/*var square = {
side:5,
get area (){
    return this.side**2
}
}
square.side =10;
console.log(square.area)
*/
//sycrounous programming
// let a = prompt("what is your name");
// let b = prompt("what is your age");
// let c = prompt("what is your faverite color");
// console.log(a+"is"+b+'years old and has'+c+"favorite color.");
//Asynchronous programming
/*console.log("Start")
setTimeout(function(){
    console.log("hy bro iam good:");
}
,3000function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
)
console.log("end");

function greeting(name){
    console.log("hi amir"+name)
}
function processUserInput(callback){
    var name = prompt("please enter your name!.");
    callback(name);
}
processUserInput(greeting);
 //CALLBACK FUNCTION
function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);
  */////
  //closure in javascript
  /*function outerFunction(){
    var outerVariable = "i am outside";
    function innerFuncton(){
        console.log(outerVariable);
    }
    return innerFuncton;
  }
  var innerFuncton = outerFunction();
  innerFuncton();
  //logs "i am outside!"
/*
var cars = ["cars","car2","car3"];
 function car(item,index){
    document.write(index+"=>"+item+"<br/>");
    array[index]=item+"0";
 }
 cars.forEach(car);
 function after(item,index){
    document.write(index+"=>"+item+"<br/>");
 }

 var cars = ["cars","car2","car3"];
 function car(item,index){
     document.write(index+"=>"+item+"<br/>");
     array[index]=item+"0";
 }
 cars.forEach(car);
 function after(item,index){
     document.write(index+"=>"+item+"<br/>");
 } 

for(var i=0; i<=10;i++){
    if(i==5) {
        break;
        console.log(i+"<br");
    }
    console.log(i+"<br");
}
 
var i = 3;
switch (i)
 {
    case 1:
        document.write("i is one");
        break;
        case2:
        document.write("i is 2");
        break;
        case3:
        document.write("i is three");
        break;
        case4:
        document.write("i is four");
        break;
        default:
            document.write("i is out of swache");
        break;

}
document.write("shvgfudvgu");
*/