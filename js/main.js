function sad(){
	var sad = document.querySelector('.happy');
	var circle__smile = document.querySelector('.circle__smile');
	var chbox = document.querySelector('#chbox');
	sad.innerHTML = 'Sad';
	circle__smile.classList.remove("smile_happy");
	circle__smile.classList.add("smile_sad");
	if(chbox.checked != true){
		sad.innerHTML='Happy';
		circle__smile.classList.remove("smile_sad");
		circle__smile.classList.add("smile_happy");
	}
}
