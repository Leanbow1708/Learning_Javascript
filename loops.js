let names = ["Mayank","Rutvi","Ruyank","Yatvi"]
// we have simeple for(;;) and while() loops
//for of loops and works on iterables , will not work on objects
for(let name of names) {
    console.log(name)
}
// for objects use for in loop
const car = {
    name: "Audi",
    wheels: 4
}
for(let item in car){
    console.log(item)
}