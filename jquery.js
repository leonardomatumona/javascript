$(function () {
    $("#mostrar").click(mostrar)
    $("#esconder").click(esconder)
    $("#img").hover(function(){
        $(this).fadeTo(0,0.5)
    })
    $("#img").mouseleave(function(){
        $(this).fadeTo(0,1)
    })
    $("h1").hover(function(){
        $(this).addClass("destaque")
    })
    $("h1").mouseleave(function(){
        $(this).removeClass("destaque")
    })
    $("#p1").hover(aplicarDestaque)
    $("#p1").mouseleave(tirarDestaque)
})

function mostrar() {
    $("#p1").fadeIn(1000)

}
function esconder(){
    $("#p1").fadeOut(3000)
}

function aplicarDestaque(){
    $("#p1").addClass("destaque")
   
}

function tirarDestaque(){
    $("#p1").removeClass("destaque")

}




