// const course = {
//     lechure: 10,
//     section: 3,
//     title: 'javascript',
//     note: {
//         introdoction: "welcome to js course",
//     },
//     enroll() {
//         console.log("you are sucessfully enrolled");
//     }
// }
// course.enroll();
// console.log(course.note);
// console.log(course);

// factory function

// function createCourse(title,course,class1)
// {
//     return {
//         title:title,
//         class1:class1,
//         course:course,
//         enroll(){
//             console.log("your scusses")
//         },


//     }
// }
// const course = createCourse("javascript","oops","BSSE");
// course.enroll();
// console.log(course);

//constructor function
// function course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log("your are sucess");
//     }
// }
// const course1 = new course('javascrpt');
// course1.enroll();
// // delete keyworld
// delete course.title;

// primitive data type
// let a = 12;
// // pass by value
// let b = a;
// a = 15;
// console.log(a);
// console.log(b);
// output:15,12
    // or
   // let a = 12;
// pass by value
// let b = a;
// console.log(a);
// console.log(b);
// output:12,12

//Reference datatype
// let obj = { Number:12}
//pass by reference
// let obj_2 = obj;
// console.log(obj);
// console.log(obj_2)
//outout:12,12
//or
// let obj = { Number:12}

// let obj_2 = obj;
// obj_2.Number=15;
// console.log(obj);
// console.log(obj_2)
// output:15,15