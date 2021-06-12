class PromiseLike{
    constructor(msg){
        this.msg = msg
    }
    
    then(res,rej){
        console.log("The promisable then")
        res("third then")
    }
}
let p= new  Promise((res,rej) => {
    console.log("Hello World")
    res("first then")
})
p
.then((res) => {
    console.log(res)
    return "Second then"
})
.then((res) => {
    console.log(res)
})
.then(function(){
  return new PromiseLike()
})
.then( (res) => {
    console.log("The last then in being called "+res)
})