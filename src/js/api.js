

const KEY__API = '45e036602b450491912e4761702a27c4';
//Varibles TDM
const TRAIDIN__URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY__API}`;
const SEARCH__URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY__API}&language=en-US&page=1&include_adult=false`;

const GENERS__URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=45e036602b450491912e4761702a27c4&language=en-US'

// const MOVIE__ID = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=45e036602b450491912e4761702a27c4&language=en-US'
// const TRAILER__ID = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=45e036602b450491912e4761702a27c4&language=en-US'



export async function fetchMainPage(page) {
	const response = await fetch(TRAIDIN__URL + `&page=${page}`);
	const data = response.json();
	return data;
}

export async function fetchGenres() {
	const response = await fetch(GENERS__URL);
	const genres = response.json();
	return genres;
}


export async function fetchSearch(page, query) {
	const response = await fetch(SEARCH__URL + `&page=${page}&query=${query}` );
	const data = response.json();
	return data;
}