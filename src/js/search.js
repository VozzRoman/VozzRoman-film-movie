import { fetchSearch } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";
import { resf } from "./ref";
import { renderMainPage } from "./main";



page = 1;
let searchQuery = '';


resf.formEl.addEventListener('submit', clickOnSubmit);

function clickOnSubmit(e) {
	e.preventDefault();
	console.log(e.currentTarget.elements.search.value);
	searchQuery = e.currentTarget.elements.search.value;
	clearContainer();	
	// if (searchQuery === '') {
	// 	console.log('go nahuy');
	// }
	if (searchQuery > 0) {
		console.log(searchQuery);
		renderSearchPage(searchQuery);

	} else {
		renderMainPage();
	}
	// resf.formEl.reset();
	
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