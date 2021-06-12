
let turn = true


function ready(){


    const img = document.getElementById("img1")

 var id = setInterval(() => {
        if(turn){
            img.setAttribute("src","img1.jpg")
        }
        else
        img.setAttribute("src","img2.jpg")
            turn = !turn
        
        },1000)
    
}


document.addEventListener("DOMContentLoaded",ready)



