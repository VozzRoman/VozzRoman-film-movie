
import { fetchMainPage } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";



let page = 1;

 renderMainPage()


export async function renderMainPage() {
	const promise = await fetchMainPage(page);
	const data = promise.results;
	const getGen = await fetchGenres();
	
	createMarkUp(data, getGen.genres);
	console.log(data);
}

