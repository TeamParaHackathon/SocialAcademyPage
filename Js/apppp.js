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

/* Tabs de Documentos, Videos y proyectos */

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})