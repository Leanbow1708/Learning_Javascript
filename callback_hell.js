function startConnection(url){
    console.log(`Connected with url ${url}`)
}
function capturePhoto(url)
{
    console.log("Photo captured successfully "+url)
}
function compressPhoto(url){
    console.log(`Photo compressed successfuly photo.zip`)
}
function uploadPhoto(url){
    console.log(`Photo uploaded to http:\\facebbok.com\profil.zip`)
}



function connect(url){
    console.log(`Starting to connect ${url}`)
    setTimeout(function(){
        startConnection(url)
        setTimeout(function(){
            capturePhoto("Profile.png")
            setTimeout(function(){
                compressPhoto(url)
                setTimeout(uploadPhoto(url),3000)
            },2000)

        },3000)


    },1000)


}

connect("https://facebook.com/profile.png")