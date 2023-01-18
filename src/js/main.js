
import { fetchMainPage } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";
import { showPaginationTrended } from "./pagination";


let page = 1;

renderMainPage(page);


export async function renderMainPage(pageValue) {
	const promise = await fetchMainPage(pageValue);
	const data = promise.results;
	const getGen = await fetchGenres();
	
	createMarkUp(data, getGen.genres);
	showPaginationTrended(promise.total_pages)
	console.log(promise.total_pages);
}

