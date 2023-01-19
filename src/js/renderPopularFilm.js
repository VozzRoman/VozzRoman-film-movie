
import { resf } from "./ref";
export function createMarkUp(data, allGenres) {
	const markUp = data.map(item => {
		
		let defaultPic = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-minimalist-film-festival-film-and-tv-movie-poster-image_220289.jpg';
		const { title, genre_ids, release_date, poster_path, vote_average, name } = item;
		let filmPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
		const idGenre = genreId(allGenres, genre_ids);
		const year = new Date(release_date).getFullYear();
		console.log(idGenre);
		return `
			<li class="gallery__item">
					<a href="" class="gallery__link">
						<div class="gallery__vote">${vote_average.toFixed(1)}</div>
						<img src="${poster_path === null ? defaultPic : filmPoster}" alt="${title}" >
					</a>
					<div class="gallery__info">
						<h2 class="gallery__title">${!title ? name : title}</h2>
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
	allGenres.forEach(item => {
		if (filmGenre.includes(item.id)) {
			newArray.push(item.name)
		}
	})
	if (newArray.length > 2) {
		newArray = newArray.splice(0, 2);
	}
	return newArray.join(', ') + ', Other';
}
