import { resf } from "./ref";

resf.containerFilms.addEventListener('click', onCLickFilm);
resf.closeModalButton.addEventListener('click', onCLoseClick);
resf.backdrop.addEventListener('click', onBackDropClick);




function onCLickFilm(e) {
	e.preventDefault();
	if (e.target.nodeName !== "H2" && e.target.nodeName !== "IMG") {
		 return;
	}
	document.body.classList.add('is-active__backdrop');
}

function onCLoseClick() {
	document.body.classList.remove('is-active__backdrop');
}

function onBackDropClick() {
	console.log('click backdrpo');
	
}