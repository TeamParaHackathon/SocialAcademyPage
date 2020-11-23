//variables 

document.getElementById("icon-search").addEventListener("click", mostarBuscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

var bars_search = document.getElementById("ctn-bars-search");

var cover = document.getElementById("cover-ctn-search");

var inputSearch = document.getElementById("inputSearch");

var box_search = document.getElementById("box-search");

var spanClose = document.getElementById('close');

var ancho = 1232;

// ----------------------------------------------------------

function mostarBuscador() {

    if (window.screen.width >= ancho) {

        bars_search.style.top = "120px";
        cover.style.display = "block";
        inputSearch.focus();
        if (inputSearch.value == "") {
            box_search.style.display = "none";
        }

    } else {

        bars_search.style.top = "100px";
        cover.style.display = "block";
        inputSearch.focus();
        if (inputSearch.value == "") {
            box_search.style.display = "none";
        }

    }

    spanClose.onclick = function() {
        bars_search.style.top = "0px";
        cover.style.display = "none";
        inputSearch.value = "";
        box_search.style.display = "none";
    }

}

function ocultar_buscador() {
    bars_search.style.top = "0px";
    cover.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}
/**-------------------------------------------------------------------------------------------------- */

document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno);

function buscadorInterno() {
    var filter = inputSearch.value.toUpperCase();

    var li = box_search.getElementsByTagName("li");

    // Recorriendo elementos a filtrar mediante los "li"

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value == "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}

$(function() {

    // elementos de la lista
    var menues = $(".nav li");

    // manejador de click sobre todos los elementos
    menues.click(function() {
        // eliminamos active de todos los elementos
        menues.removeClass("active");
        // activamos el elemento clicado.
        $(this).addClass("active");
    });

});