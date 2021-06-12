
// **********************basic syntax*****************

// let promise = new Promise(function(response,reject){

//     response("The promise completed successfully")
// })
// promise
//     .then(function(response){
//         console.log(response)
//         return "Hello World"
//     })
//     .then(function(res){
//         console.log(res)
//     })
//     .catch(function(reject){
//         console.log(reject)
//     })


// let's create a Promise like Theneable Class that will work same as a Promise

class PromiseLike{
    constructor(num){
        this.num = num
    }
    then(resolve,reject){
        alert(this.num)
        setTimeout(() => {
            console.log(`This is the finall then(customized) ${this.num}`)
            resolve(this.num)
        },2000)
    }
}



function startConnection(url){
    console.log(`Starting to connect ${url}`)
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(`Connection established with ${url}`)
            resolve(url)
        },2000)
    })
}

function capturePhoto()
{
    console.log("Capturing the photo")
    return new Promise(function(response,reject){
        setTimeout(function(){
            console.log("Photo Captured successfully - photo.png")
            response("photo.png")
        },3000)
    })
}

function compressPhoto(url){
    console.log("Compressing the photo")
    return new Promise(function(response,reject){
        setTimeout(function(){
             console.log(`Photo compressed to ${url.split('.')[0]}.zip`)
             response(`${url.split('.')[0]}.zip`)
        })
    })
}

function uploadPhoto(url){
    console.log("Starting to upload......")
    return new Promise(function(response,reject){
        setTimeout(function(){
            console.log(`Photo Uploaded to https://facebook.com/${url}`)
            reject("Manuall error")
            response("done................")
        })
    })
}


new Promise(function(response,reject){
    console.log("Starting the process")
    response("https://www.facebook.com")
})
.then(startConnection)
.then(capturePhoto)
.then(compressPhoto)
.then(uploadPhoto)
.then(function(res){
    return new PromiseLike(8)
})
.then(function(res){
    console.log("Last Call "+ res)
})
.catch(function(e){
    console.log(e)
})
.finally(() => {
    console.log("It will always run at last no matter resolve or reject")
})


