const inputs = document.querySelectorAll(".input");
const iconoRequisitos = document.querySelector(".inputArea");
const contenedorIcono = document.querySelector(".input-group")

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function addBlue (){
	contenedorIcono.classList.add("focus");
}

function removeBlue (){
	if(this.value == ""){
		contenedorIcono.classList.remove("focus");
	}
}

iconoRequisitos.addEventListener("focus", addBlue);
iconoRequisitos.addEventListener("blur", removeBlue);
