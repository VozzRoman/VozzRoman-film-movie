import { fetchSearch } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";
import { resf } from "./ref";
import { renderMainPage } from "./main";


page = 1;



resf.formEl.addEventListener('submit', clickOnSubmit);

function clickOnSubmit(e) {
	e.preventDefault();
	console.log(e.currentTarget.elements.search.value);
	let searchQuery = e.currentTarget.elements.search.value;
	clearContainer();
	e.currentTarget.elements.search.value = '';
	if (searchQuery === 0) {
		renderMainPage();
	} else {
		renderSearchPage(searchQuery);
	}
	
}




async function renderSearchPage(query) {
	const promis = await fetchSearch(page, query);
	const data = promis.results;
	console.log(data);
	const getGen = await fetchGenres();
	createMarkUp(data, getGen.genres);

}

function clearContainer() {
	resf.containerFilms.innerHTML = '';
}