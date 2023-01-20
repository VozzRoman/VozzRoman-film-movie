import { resf } from "./ref";
import { fetchById } from "./api";

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
	const id = Number(e.target.dataset.id);
	console.log(id);

	fetchById(id).then(res => console.log(res));

	
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


//-----------render

function createMarkUp(data) {
	const markUp = `
		<ul class="card__list">
					<li class="card__item">
						<img src="" alt="">
					</li>
					<li class="card__item">
						<h1 class="card__title"></h1>
						<div class="card__info">
							<p class="card__info-name"></p>
							<p class="card__info-result"></p>
						</div>
						<div class="card__info">
							<p class="card__info-name"></p>
							<p class="card__info-result"></p>
						</div>
						<div class="card__info">
							<p class="card__info-name"></p>
							<p class="card__info-result"></p>
						</div>
						<div class="card__info">
							<p class="card__info-name"></p>
							<p class="card__info-result"></p>
						</div>
						<h2 class="card__about"></h2>

						<p class="card__text"></p>

						
					</li>
				</ul>
	
	`
}