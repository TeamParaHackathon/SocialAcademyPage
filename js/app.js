/*Funcionalidad del Boton Ubicado en la parte superior derecha el cual permite
cambiar de Inicio de Sesion a Crear una cuenta nueva sin tener que recargar la pagina
a motivo de rendiemiento de la plataforma */


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containerSing");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


