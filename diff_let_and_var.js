//let and const are block scope

// 1

// let a = 10
// if(1){
//     let a = 20;
// }
// console.log(a)
// o/p 10 
//but var is function scope

// 2

// var a = 10
// if(1){
//     var a = 20
// }
// console.log(a)
// o/p 20

// 3

var a = 10
function demo(){
    var a = 20
}
a()
console.log(a)
// o/p 10
// here the 2 a are different as, the inner a is in function scope