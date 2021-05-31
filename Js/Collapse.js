const categorias = document.querySelectorAll("#categorias .categoria");

const contendorPreguntas = document.querySelectorAll(".contenedor-preguntas");

let categoriaActiva = null;

categorias.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    categorias.forEach((element) => {
      element.classList.remove("activa");
    });

    e.currentTarget.classList.toggle("activa");
    categoriaActiva = cat.dataset.categoria;

    // Cambia Contenido

    contendorPreguntas.forEach((cont) => {
        if(cont.dataset.categoria === categoriaActiva){
            cont.classList.add('activo');
        }else{
            cont.classList.remove('activo');

        }
    });
  });
});
