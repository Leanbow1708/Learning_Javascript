// 1) Implicit Binding
// here this will always refer to the object itself
// const car = {
//     name: "Audi",
//     getName: function(){
//         console.log(`The name is ${this.name}`)
//     }
// }

// 2) Explicit Binding
// function sayName(name)
// {
//     console.log(name)
//     this.name = "Mayank"
//     console.log(this)
// }
// let obj = {
//     a:1,
//     b:2
// }
// // sayName.call(obj,"Mayank")
// // here .call will bind the obj with this and it will call the function
// // however we can bind object with this and call later
// let f = sayName.bind(obj,"Mayank") // binded with this but not called
// f()