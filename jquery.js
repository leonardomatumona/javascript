$(function () {
    $("#mostrar").click(mostrar)
    $("#esconder").click(esconder)
    $("img").hover
    $("#p1").hover(aplicarDestaque)
    $("#p1").hover( tirarDestaque)



})
function mostrar() {
    $("#p1").fadeIn(1000)

}
function esconder(){
    $("#p1").fadeTo(3000; 0.5)
}

