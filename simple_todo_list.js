


function ready(){

    const input = document.querySelector("#inputBox");
    const addBtn = document.querySelector("#btnAdd");
    const ul = document.getElementById("notesUl")


    addBtn.onclick = function(event){
        console.log(event)

        console.log(input.value)

        const li = document.createElement("li")
        li.innerText = input.value

        const btnEdit = document.createElement("button")
        const btnRemove = document.createElement("button")
        input.value = ""
        btnEdit.innerText = "Edit"
        btnRemove.innerText = "Remove"
        btnEdit.style.margin = "10px"
        btnRemove.style.margin = "10px"

        btnRemove.onclick = function(event){

            li.remove()

        }


        li.appendChild(btnEdit)
        li.appendChild(btnRemove)
        ul.appendChild(li)
        

    }
}


document.addEventListener("DOMContentLoaded",ready)
