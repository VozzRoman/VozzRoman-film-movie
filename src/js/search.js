import { fetchSearch } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";
import { resf } from "./ref";
import { renderMainPage } from "./main";
import { showPaginationSearch } from "./pagination";



page = 1;



resf.formEl.addEventListener('submit', clickOnSubmit);

function clickOnSubmit(e) {
	e.preventDefault();
	console.log(e.currentTarget.elements.search.value);
	let searchQuery = e.currentTarget.elements.search.value;
		
	if (searchQuery === '') {
		resf.warrMessage.textContent = 'type something';
		return;
	}
	if (searchQuery.length > 0) {
		console.log(searchQuery);
		resf.warrMessage.textContent = '';
		renderSearchPage(page, searchQuery);

	} else {
		renderMainPage(page);
	}
	resf.formEl.reset();
	
}




export async function renderSearchPage(page, query) {
	const promis = await fetchSearch(page, query);
	const data = promis.results;
	if (data.length === 0) {
		resf.warrMessage.textContent = 'no matches in this library';
		return;
	
	}
		console.log(data);
		clearContainer();
		const getGen = await fetchGenres();
		resf.warrMessage.textContent = '';
	createMarkUp(data, getGen.genres);
	showPaginationSearch(promis.total_pages);
	

}

function clearContainer() {
	resf.containerFilms.innerHTML = '';
}
