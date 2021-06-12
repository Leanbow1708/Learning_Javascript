// const person = {
//     name: "Mayank",
//     age: 22
// }
// const p1 = Object.create(person)
// const p2 = Object.create(p1)
// person.name = "Singh"
// console.log(p1.name)
// p1.name = "Rutvi"
// console.log(p2.__proto__.__proto__.name )

// p2.__proto__.__proto__.name = "Mayank Singh"
// console.log(person.name)
// //adding a property to grandparent's object
// p2.__proto__.__proto__.lastName = "Singh"
// console.log(p2.__proto__.__proto__.lastName)

function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.showDetails = function(){
    console.log(`the name is ${this.name}`)
}
let p1 = new Person("Mayank",22);
p1.showDetails()
let p2 = new Person("Rutvi",22);
p2.showDetails()



