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

	fetchById(id).then(res => createMarkUp(res)).catch(error => console.log(error));

	
}

function onCLoseClick() {
	document.body.classList.remove('is-active__backdrop');
	window.removeEventListener('keydown', onEscPress);
	clearContainer();
	
}

function onBackDropClick(e) {
	console.log(e.currentTarget);
	console.log(e.target);
	if (e.currentTarget === e.target) {
		document.body.classList.remove('is-active__backdrop');
		clearContainer();
	}
	
}

function onEscPress(e) {
	if (e.key === "Escape") {
		console.log('good');
		onCLoseClick();
	}
	
}


//-----------render
defaultImage = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-minimalist-film-festival-film-and-tv-movie-poster-image_220289.jpg';

function createMarkUp(data) {
	const { poster_path, title, vote_count, vote_average, popularity, original_title, genres, overview, name} = data;
	let filmPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
	
	const newGenre = genres.map(el => el.name);
	console.log(newGenre[0]);
	const markUp = `
		<ul class="card__list">
					<li class="card__item">
						<img src="${poster_path === null ? defaultImage : filmPoster || backdrop_path}" alt="${title}">
					</li>
					<li class="card__item">
						<h1 class="card__title">${!title ? name : title}</h1>
						<div class="card__info">
							<p class="card__info-name">Vote / Votes</p>
							<p class="card__info-result"><span>${vote_average.toFixed(1)}</span> / ${vote_count}</p>
						</div>
						<div class="card__info">
							<p class="card__info-name">Popularity</p>
							<p class="card__info-result">${popularity.toFixed(1)}</p>
						</div>
						<div class="card__info">
							<p class="card__info-name">Original Title</p>
							<p class="card__info-result">${original_title}</p>
						</div>
						<div class="card__info">
							<p class="card__info-name">Genre</p>
							<p class="card__info-result">${newGenre[0]}</p>
						</div>
						<h2 class="card__about">About</h2>

						<p class="card__text">${overview}</p>

					<button class="button__modal">add to Watched</button>
					<button class="button__modal">add to queue</button>
						
					</li>
				</ul>
	
	`;
	resf.modalContainerFilm.insertAdjacentHTML('beforeend', markUp);
}


function clearContainer() {
	resf.modalContainerFilm.innerHTML = '';
}