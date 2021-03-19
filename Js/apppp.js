/*JS del buscador */
/* 	codigo de la aplicacion */

let buscador = new Search({
    el: '#bs1',
    list: [
        'Programacion',
        'Arquitectura',
        'Diseño Grafico',
        'Ingenieria',
        'Planos',
        'Matematicas',
        'Fisica',
        'Estructura de costos',
        'Contabilidad',
        'Diseños en XD',
        'Programacion en C++',
        'Programacion en python',
        'Programacion en bloques',
        'Edicion de video en AdobePremier',
        'Edicion de video en Filmora'
    ]
});



///readmore//

/*
let button = document.querySelector('#button').addEventListener('click', function() {
    
    if(!i){
        document.getElementById('readmore').style.display = 'flex';
        document.getElementById('button').innerHTML = 'Read Less';
        i = 1;
    }
    else{
        document.getElementById('readmore').style.display = 'none';
        document.getElementById('button').innerHTML = 'Read More';
        i = 0;
    }
})*/
let i = 0;
jQuery(document).on('click', 'div.botton #button',
    function (event){
        if(!i){
            event.preventDefault();
            jQuery('.contenidooculto').slideToggle();
            document.getElementById('button').innerHTML = 'Ver menos..';
            i = 1;
        }
        else{
            event.preventDefault();
            jQuery('.contenidooculto').slideToggle();
            document.getElementById('button').innerHTML = 'Ver más..';
            i = 0;
        }
    });


/* Navegacion con tabs*/
$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
})