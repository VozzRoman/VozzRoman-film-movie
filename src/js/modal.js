import { resf } from "./ref";

resf.containerFilms.addEventListener('click', onCLickFilm);
resf.closeModalButton.addEventListener('click', onCLoseClick);
resf.backdrop.addEventListener('click', onBackDropClick);




function onCLickFilm(e) {
	e.preventDefault();
	window.addEventListener('keydown', onEscPress);
	if (e.target.nodeName !== "H2" && e.target.nodeName !== "IMG") {
		 return;
	}
	document.body.classList.add('is-active__backdrop');
}

function onCLoseClick() {
	document.body.classList.remove('is-active__backdrop');
	window.removeEventListener('keydown', onEscPress);
}

function onBackDropClick(e) {
	console.log(e.currentTarget);
	console.log(e.target);
	if (e.currentTarget === e.target) {
		document.body.classList.remove('is-active__backdrop');
	}
	
}

function onEscPress(e) {
	if (e.key === "Escape") {
		console.log('good');
		onCLoseClick();
	}
	
}