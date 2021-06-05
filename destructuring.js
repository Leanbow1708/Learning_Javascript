let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
[a,...rest] = [10,20,20,40,50]
console.log(rest);
// here ...rest should always be last

// Array destructuring
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
// above syntax is similar to const red = foo[0]; const yellow = foo[1]; etc
let a, b;
[a,b=9] = [2] // passing default parameters to destructuring
// swapping variable
[a,b] = [b,a]
// ignoring few values
let [a,,c] = [1,2,3]
//Object destructuring
({a, b} = {a: 1, b: 2})// we need (...) otherwise {a,b} will be treated as a separate block so error will occur
//or
let {a,b} = {a:1,b:2}
console.log(a)
user = {
    name: "Mayank",
    age: 22 }
    let {name,age} = user
// remember variables should be of same name as that of object
// default values in destruc...
const {a = 10, b = 5} = {a: 3};
// to change the variable values during destruct...
const {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa)
//destructuring objects in functions
user = {
    firstName:"Mayank",
    lastName:"Singh",  
    age: 23}
    
    function showUser({firstName:name,age}){
        console.log("The name is "+name+" and the age is "+age)
    }
showUser(user)
// iteration in array of objects , destructuring
const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }