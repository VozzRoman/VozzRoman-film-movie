
import { resf } from "./ref";
export function createMarkUp(data, allGenres) {
	const markUp = data.map(item => {
		const { title, genre_ids, release_date, poster_path, vote_average } = item;
		const idGenre = genreId(allGenres, genre_ids);
		const year = new Date(release_date).getFullYear();
		console.log(idGenre);
		return `
			<li class="gallery__item">
					<a href="" class="gallery__link">
						<div class="gallery__vote">${vote_average}</div>
						<img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" >
					</a>
					<div class="gallery__info">
						<h2 class="gallery__title">${title}</h2>
						<div class="gallery__box">
							<p class="gallery__ganre">${idGenre}</p>
							<p class="gallery__year">${year}</p>
						</div>
					</div>
					
				</li>
		
		`;
	}).join('');
	resf.containerFilms.insertAdjacentHTML('beforeend', markUp);

}


//Функция для жанров

function genreId(allGenres, filmGenre) {
	let newArray = [];

	allGenres.map(item => {
		if (filmGenre.includes(item.id)) {
			newArray.push(item.name)
		}
	})
	if (newArray.length > 2) {
		newArray = newArray.splice(0, 2);
	}
	return newArray.join(', ') + ', Other';
}
