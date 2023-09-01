// word vs keyword
// var const let
// variables and constants
// const dalha = "lab";
// const dulhan ="laby";
// console.log(dalha+dulhan);
// dalha="amir"
// console.log(dalha+dulhan);
// HOSTING HOISTING
// hoisting
// hoisting = variable and function
// are hoisted which means ther declaratio
// is moved on the top of code
// var a;
// console.log(a);
// a=12;
// DATA TYPE IN JS
// there are two type in js
// primitive and reference
// PRIMITIVE= NUMBER,STRING,NULL,UNDEFINR,BOOLEAN,
// REFERENCE=[],(),{};
// reference= aisi koi be value jisko copy karne par real
// copy nhi hota,balki us main value ka reference pass hojaata hai,
//use hum reference value khate hai aur jiska copy karne
//par real copy ho jaaye wo value primitive type value hoti hai
//  var a = 12;
//  var b = a;
// document.write(b);
// var b=b+5;
// document.write(b)
// var a =[12,13];
// var b = a;
// b.pop();
//console.log(b);
//CONDITIONALS= if else ,else if
//jab bhi ager mager par aayegi ,
// yaa fir baat aayegi aisa hua to 
// ye karo waisa hua to wo karo 
/*var x = parseInt(prompt());
if(x==10)
{
    console.log("one condition is true");

}
else if(x==5)
{
    console.log("two condition is true");
}
else if(x==1)
{
    console.log(" three condition is true")
}
else{
    console.log("sorrry this number is out of condition");
}

// LOOP = matlab repeat
// for(start;end;change){} 
for( var i = 25; i<=50; i++)
{
    console.log(i);
}

var x = 25;
while(x<50){
console.log(x);
x++;
}
*/
// FUNCTIONS= mainly three kaam ke liye hote hai
// 1)jab aapka code app turant nhi chalane
// chaahte hu future mein chalaana chaahte ho
//2)jab apka code ap reuse karna chahte ho
//3)jab aap code chalana chaahte ho bar bar
// with different data
//function ka matlab aap kach code ko likh kar
//koi name de sakte ho
/*function heloBolo(){
    console.log("Hi Muhammad Amir");
}
heloBolo();

function frintHeandDoloper(){
    console.log("HTML");
    console.log("CSS");
    console.log("javascript");
}
frintHeandDoloper();
*/
//ARGUMENT = real value jo hum deta hai fnc chalaate waqat
// ARRAYS = PUSH(ADD LAST IN ARRAYS);
// ARRAYS = UNSHIFT() ADD FIRST IN ARRAYS 
//ARRAYS =  POP(REMOVE LAST IN ARRAYS)
//ARRAYS = SHIFT(REMOVE FRIST IN ARRAYS)
// PARAMETER = variables jis ma value store hoti hai argument waali
 /*var arr = [1,2,3,4,5,6,7,8,];
 console.log(arr);
 arr.push(9);
 console.log(arr);
 arr.pop()
 console.log(arr);
 arr.unshift(0);
 console.log(arr);
 arr.shift();
 console.log(arr); 
 // SPLICE(- , -)
 */
//  var arr = [1,2,3];
//  console.log(arr);
//  arr.splice(1,3);
//  console.log(arr);
 /*var arr = [1,2,3];
console.log(arr);
arr.splice(1,3);
console.log(arr);*/
//HEAP MEMORY= jitne bhi data ya variables
//hum baanaate hai unhe store kahi to karna padhta hai 
// hai uske liye hota hai heap mamoery
// 1+2+3+4+5+6 = 21 but computer solve like that
// 1+2=3 and then 3+3 =6 then 6+5=11 then 11+6=17
// here 3, 6 this store in heap memoery
/* EXECUTION CONTEXT= matlab jab bhi hum function 
chalaayege function apna ek khudka ek imaginary container
bana lega jismein uski teen cheeje hogi
1) variables
2) function inside that parent function
3)lexical enviroment of that function
ye jp container hai imginary ise hi
hum execution context kahte hai

function abcd(){
    var a = 12;
    function def(){
        var b = 12 ;
    }
}

var a = [1,2,3,4,5,6,7,8,9,10];
var b = [...a];
b.pop();
console.log(a,b)*/
// var obj = { name:"Amir",name1:"Ali",name2:"Raja"};
// var obj2 = {...obj};
// obj2.name="Muhammad"
// console.log(obj,obj2);
// if(document.all){
//     console.log("true");
// }
// else
// {
//     console.log("false");
//}
// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// a.forEach(function(val)
// {
//     console.log(val*2);
// })
/*var obj = {
    name:"Muhammad Amir",
    age:12,
    city:"karachi",
}
for( var can in obj){
    
    //console.g(can);
    console.log(obj,obj[can]);
}

function abcd(a){
 a();
}
abcd(function(){console.log("smir");})
*/
var a = {
    name:"lalkhan",
    age:24,
}
console.log(a);
delete a.age;
delete a.name;
console.log(a);