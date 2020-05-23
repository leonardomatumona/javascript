$(function () {
    $("#mostrar").click(mostrar)
    $("#esconder").click(esconder)
    $("#img").hover(function () {
        $(this)
            .animate({
                opacity: 1,
                width: '300px'

            })
    })
    $("#img").mouseleave(function () {
        $(this)
            .animate({
                opacity: 0.5,
                width: '200px'

            })

    })
    $("h1").hover(aplicarDestaque)
    $("h1").mouseleave(tirarDestaque)

    $("#p1").hover(aplicarDestaque)
    $("#p1").mouseleave(tirarDestaque)
})


function mostrar() {
    $("#p1").fadeIn(1000)

}
function esconder() {
    $("#p1").fadeOut(3000)
}



function aplicarDestaque() {
    $(this).addClass("destaque")
    let texto = $(this).text()
    console.log(texto)
    texto = texto + " (destaque)"
    $(this).text(texto)


}

function tirarDestaque() {
    $(this).removeClass("destaque")
    let texto = $(this).text()
    const limite = texto.indexOf(" (destaque)")
    texto = texto.substring(0, limite)
    $(this).text(texto)





}




