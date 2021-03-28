
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
 
let KlikeButton = document.getElementById('likeButton2');
let KdislikeButton = document.getElementById('dislikeButton2');
let KreactionLike = document.getElementById('iconReaction2');
let Knegative = document.getElementById('iconReactionNegative2');
let KreactionNunmber = document.getElementById('pointer3')
let KreactionNunmber2 = document.getElementById('pointer4')

KlikeButton.addEventListener('click', function(){
	if(KreactionLike.classList.contains('activeLike')){
		KreactionLike.classList.remove('activeLike');
		KreactionNunmber.classList.remove('pointActive');
	}else{
		KreactionLike.classList.add('activeLike');
		KreactionNunmber.classList.add('pointActive');
		Knegative.classList.remove('activeDislike');
		KreactionNunmber2.classList.remove('pointActive')
	}
});
KdislikeButton.addEventListener('click', function(){

	if(Knegative.classList.contains('activeDislike')){
		Knegative.classList.remove('activeDislike');
		KreactionNunmber2.classList.remove('pointActive');
	}else{
		Knegative.classList.add('activeDislike');
		KreactionNunmber2.classList.add('pointActive');
		KreactionLike.classList.remove('activeLike');
		KreactionNunmber.classList.remove('pointActive');
	}
});

 
let YlikeButton = document.getElementById('likeButton3');
let YdislikeButton = document.getElementById('dislikeButton3');
let YreactionLike = document.getElementById('iconReaction3');
let Ynegative = document.getElementById('iconReactionNegative3');
let YreactionNunmber = document.getElementById('pointer5')
let YreactionNunmber2 = document.getElementById('pointer6')

YlikeButton.addEventListener('click', function(){
	if(YreactionLike.classList.contains('activeLike')){
		YreactionLike.classList.remove('activeLike');
		YreactionNunmber.classList.remove('pointActive');
	}else{
		YreactionLike.classList.add('activeLike');
		YreactionNunmber.classList.add('pointActive');
		Ynegative.classList.remove('activeDislike');
		YreactionNunmber2.classList.remove('pointActive')
	}
});
YdislikeButton.addEventListener('click', function(){

	if(Ynegative.classList.contains('activeDislike')){
		Ynegative.classList.remove('activeDislike');
		YreactionNunmber2.classList.remove('pointActive');
	}else{
		Ynegative.classList.add('activeDislike');
		YreactionNunmber2.classList.add('pointActive');
		YreactionLike.classList.remove('activeLike');
		YreactionNunmber.classList.remove('pointActive');
	}
});
 

let ZlikeButton = document.getElementById('likeButton4');
let ZdislikeButton = document.getElementById('dislikeButton4');
let ZreactionLike = document.getElementById('iconReaction4');
let Znegative = document.getElementById('iconReactionNegative4');
let ZreactionNunmber = document.getElementById('pointer7')
let ZreactionNunmber2 = document.getElementById('pointer8')

ZlikeButton.addEventListener('click', function(){
	if(ZreactionLike.classList.contains('activeLike')){
		ZreactionLike.classList.remove('activeLike');
		ZreactionNunmber.classList.remove('pointActive');
	}else{
		ZreactionLike.classList.add('activeLike');
		ZreactionNunmber.classList.add('pointActive');
		Znegative.classList.remove('activeDislike');
		ZreactionNunmber2.classList.remove('pointActive')
	}
});
ZdislikeButton.addEventListener('click', function(){

	if(Znegative.classList.contains('activeDislike')){
		Znegative.classList.remove('activeDislike');
		ZreactionNunmber2.classList.remove('pointActive');
	}else{
		Znegative.classList.add('activeDislike');
		ZreactionNunmber2.classList.add('pointActive');
		ZreactionLike.classList.remove('activeLike');
		ZreactionNunmber.classList.remove('pointActive');
	}
});
 
let QlikeButton = document.getElementById('likeButton5');
let QdislikeButton = document.getElementById('dislikeButton5');
let QreactionLike = document.getElementById('iconReaction5');
let Qnegative = document.getElementById('iconReactionNegative5');
let QreactionNunmber = document.getElementById('pointer9')
let QreactionNunmber2 = document.getElementById('pointer10')

QlikeButton.addEventListener('click', function(){
	if(QreactionLike.classList.contains('activeLike')){
		QreactionLike.classList.remove('activeLike');
		QreactionNunmber.classList.remove('pointActive');
	}else{
		QreactionLike.classList.add('activeLike');
		QreactionNunmber.classList.add('pointActive');
		Qnegative.classList.remove('activeDislike');
		QreactionNunmber2.classList.remove('pointActive')
	}
});
QdislikeButton.addEventListener('click', function(){

	if(Qnegative.classList.contains('activeDislike')){
		Qnegative.classList.remove('activeDislike');
		QreactionNunmber2.classList.remove('pointActive');
	}else{
		Qnegative.classList.add('activeDislike');
		QreactionNunmber2.classList.add('pointActive');
		QreactionLike.classList.remove('activeLike');
		QreactionNunmber.classList.remove('pointActive');
	}
});


let WlikeButton = document.getElementById('likeButton6');
let WdislikeButton = document.getElementById('dislikeButton6');
let WreactionLike = document.getElementById('iconReaction6');
let Wnegative = document.getElementById('iconReactionNegative6');
let WreactionNunmber = document.getElementById('pointer11')
let WreactionNunmber2 = document.getElementById('pointer12')

WlikeButton.addEventListener('click', function(){
	if(WreactionLike.classList.contains('activeLike')){
		WreactionLike.classList.remove('activeLike');
		WreactionNunmber.classList.remove('pointActive');
	}else{
		WreactionLike.classList.add('activeLike');
		WreactionNunmber.classList.add('pointActive');
		Wnegative.classList.remove('activeDislike');
		WreactionNunmber2.classList.remove('pointActive')
	}
});
WdislikeButton.addEventListener('click', function(){

	if(Wnegative.classList.contains('activeDislike')){
		Wnegative.classList.remove('activeDislike');
		WreactionNunmber2.classList.remove('pointActive');
	}else{
		Wnegative.classList.add('activeDislike');
		WreactionNunmber2.classList.add('pointActive');
		WreactionLike.classList.remove('activeLike');
		WreactionNunmber.classList.remove('pointActive');
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