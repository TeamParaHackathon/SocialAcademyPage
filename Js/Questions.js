const preguntas = document.querySelectorAll(".preguntas .contenedor-pregunta");

preguntas.forEach((preg) => {
  preg.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("activa");

    /*-----------------------------Reiniciar Contenedor----------------------------- */

    preguntas.forEach((element) => {
      if (preg !== element) {
        element.classList.remove("activa");
      }
    });
  });
});
