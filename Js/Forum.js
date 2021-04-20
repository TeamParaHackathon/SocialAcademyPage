$(document).ready(function () {
	var typed = new Typed(".typing", {
		strings: [
			"Informática General",
			"Diseño Gráfico",
			"Desarrollo Web",
			"Marketing",
            "Desarrollo Móvil",
			"Contabilidad",
			"Progamación General",
		],
		typeSpeed: 150,
		backSpeed: 70,
		loop: true,
	});
});

const reaccionesLike = document.querySelectorAll(".likeButton");

reaccionesLike.forEach( (like) =>{
	like.addEventListener("click", (e) =>{
		e.currentTarget.classList.toggle("activaButton");
	});
	
} )

