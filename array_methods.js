//*************Splice*******************
[1, 2, 3, 4, 5, 6]
let temp = arr.splice(0,3) //returns 3 element from 0th idx and deletes them from original array
// we can also add elements while deleting some member 
arr.splice(0,3,"Mayank","Singh")

//***********Slice*********************
// works same as splice but the functionalities of modifying original array are not there.
//***********Split**********************
let url = "http://www.flipkart.com/products"
url.split('/')
>>["http:", "", "www.flipkart.com", "products"]

//***********Objects********************
const obj  = {
    name: "Mayank"}
// here obj is const so we can't assign new value obj.name is not const so it can be changed
obj.age = 22// we can add properties
delete obj.age// we can also delete the properties 
