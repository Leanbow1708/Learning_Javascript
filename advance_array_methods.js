function square(num){
    return num*num
}
function isOdd(num){
    if(num % 2 == 1){
        return num
    }
}
let arr = [1,2,3,4]
// 1************** MAP()

// let arr2 = arr.map(square)
// console.log(arr2)
// let arr2 = arr.map(function(n,idx){ 
//     console.log(idx) //this will print index
//     return n*n
// })

// 2************ FILTER()

// let arr2 = arr.filter(isOdd) // this adds elements in arr2 with some filter conditions
// console.log(arr2)

// create a veg food filter

//********************start*************
// let foods = ["Egg Roll","Kadhai Paneer","Chicken Kabab","Veg Roll","Palak Paneer","Fried Rice","Dal Makhani","Onion Rings","Egg Omelete","Egg Roll"]
// // here we will get all veg food sources using filter
// function isVeg(food){
//     if(!(food.toLowerCase().indexOf("chicken") !== -1 || food.toLowerCase().indexOf("egg") !== -1)) return food
// }

// let vegFood = foods.filter(isVeg)
// console.log(vegFood)
//*******************end****************** */