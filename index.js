const input = document.querySelector("#new-task")
const button = document.querySelector("#add-task-button")
const lista = document.querySelector(".task-list")

function adicionar(event) {


    const criarItem = document.createElement("li")
    criarItem.textContent = input.value
    criarItem.classList.add("task-list__item")
    lista.appendChild(criarItem)
    input.value = ""

}

button.addEventListener("click", adicionar)








