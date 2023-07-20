/**
 * Utilizando em arquivos separados as funções disponíveis não são pesquisadas.
 * Exemplo: $.ajax() não consegue ver .ajax().
 */

$(document).ready(() => {

    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-card .card-body");
    $("#target5").clone().appendTo("#left-card .card-body");
    $("#target1").parent().css("background-color", "blue");
    $("#right-card .card-body").children().css("color", "orange");
    $("#left-card .card-body").children().css("color", "green");

    /* Usando Biblioteca animate.css */

    $(".target:nth-child(2)").addClass("animate__animated animate__bounce");
    $(".target:even").addClass("animate__animated animate__shakeX");
    // $("body").addClass("animate__animated animate__fadeOut");

    $("#target3").on("click", (e) => {
        e.preventDefault();
        $(".target").addClass('animate__animated animate__flip');
        setTimeout(() => {
            $(".target").removeClass('animate__animated animate__flip');
        }, 1000);
    });

    // Usa métodos nativos. Faz o mesmo que o código acima.
    // document.getElementById("target3").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let el = document.getElementsByClassName("target")
    //     for (let i = 0; i < el.length; i++) {
    //         el[i].classList.add("animate__animated");
    //         el[i].classList.add("animate__flip");
    //     }
    //     setTimeout(() => {
    //         for (let i = 0; i < el.length; i++) {
    //             el[i].classList.remove("animate__animated");
    //             el[i].classList.remove("animate__flip");
    //         }
    //     }, 1000);
    // }
    // );
});