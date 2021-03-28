
let likeButton = document.getElementById('likeButton');
let dislikeButton = document.getElementById('dislikeButton');
let reactionLike = document.getElementById('iconReaction');
let negative = document.getElementById('iconReactionNegative');
let reactionNunmber = document.getElementById('pointer')
let reactionNunmber2 = document.getElementById('pointer2')

likeButton.addEventListener('click', function(){
	if(reactionLike.classList.contains('activeLike')){
		reactionLike.classList.remove('activeLike');
		reactionNunmber.classList.remove('pointActive');
	}else{
		reactionLike.classList.add('activeLike');
		reactionNunmber.classList.add('pointActive');
		negative.classList.remove('activeDislike');
		reactionNunmber2.classList.remove('pointActive')
	}
});
dislikeButton.addEventListener('click', function(){

	if(negative.classList.contains('activeDislike')){
		negative.classList.remove('activeDislike');
		reactionNunmber2.classList.remove('pointActive');
	}else{
		negative.classList.add('activeDislike');
		reactionNunmber2.classList.add('pointActive');
		reactionLike.classList.remove('activeLike');
		reactionNunmber.classList.remove('pointActive');
	}
});
 

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