
function incluir(){

    var name = document.querySelector("#new-task")
    var entrada= document.querySelector(".task-list")
    var liNode= document.createElement("li")
    var txtNode = document.createTextNode(name)

    liNode.appendChild(txtNode);
    entrada.appendChild(liNode);


 


}
