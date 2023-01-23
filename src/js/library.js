import { resf } from "./ref";
import { getData } from "./localStorage";
import { fetchById } from "./api";
console.log('ok');

async function getLocalDataAndRender() {
	const id = getData();
	console.log(id);
	 const arrayOfpromis = id.map(async el => {
		console.log(el);
		return promise = await fetchById(el);
		
	 })
		const film = await Promise.all(arrayOfpromis);
		 console.log(film);
		 createMarkUp(film);
	
	
	
	
}
	
	
getLocalDataAndRender();


function createMarkUp(data) {
	const markUp = data.map(item => {
		
		let defaultPic = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-minimalist-film-festival-film-and-tv-movie-poster-image_220289.jpg';
		const { title, release_date, poster_path, vote_average, name, id } = item;
		let filmPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
		// const idGenre = genreId(allGenres, genre_ids);
		const year = new Date(release_date).getFullYear();
		// console.log(idGenre);
		return `
			<li class="gallery__item" >
					<a href="" class="gallery__link">
						<div class="gallery__vote">${vote_average.toFixed(1)}</div>
						<img src="${poster_path === null ? defaultPic : filmPoster}" alt="${title}" data-id="${id}">
					</a>
					<div class="gallery__info">
						<h2 class="gallery__title" data-id="${id}">${!title ? name : title}</h2>
						<div class="gallery__box">
							<p class="gallery__ganre">fiction</p>
							<p class="gallery__year">${year}</p>
						</div>
					</div>
					
				</li>
		
		`;
	}).join('');
	resf.containerFilms.insertAdjacentHTML('beforeend', markUp);

}
