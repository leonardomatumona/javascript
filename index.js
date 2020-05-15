const input = document.querySelector("#new-task")
const button = document.querySelector("#add-task-button")
const list = document.querySelector(".task-list")

function adicionar(event) {
    if(input.value===""){
    return;  

    }

    const criarItem = newItem(input.value)
    lista.appendChild(criarItem)
    input.value=""
    input.focus()
}

function newItem(recebertexto){
    const criarItem= document.createElement("li")
    criarItem.classList.add("task-list__item")
    criarItem.innerText= recebertexto
    criarItem.appendChild(createbutton) 
    return newItem   
}

function createbutton (){
    const botao = document.createElement("button")
    botao.type ="button"
    botao.classList.add("task-list_action")
    botao.innerHTML="<i class=\"fas fa-check-square\"></i>"
    botao.addEventListener("click",drawtext)
    return botao
}

function drawtext(event){
    const botao= event.currentTarget;
    const item= botao.parentNode

    item.classList.remove("task-list__item")
    item.classList.add("task-list__item--done")
    botao.innerHTML="<i class=\"fas fa-undo-alt\"></i>"

    botao.removeEventListener("click",drawtext)
    botao.addEventListener("click",removedraw)
}
function removedraw(event){
    const botao = event.currentTarget
    const item = botao.parentNode

    item.classList.remove("task-list__item--done")
    item.classList.add("task-list__item")
    botao.innerHTML="<i class=\"fas fa-check-square\"></i>"

}









