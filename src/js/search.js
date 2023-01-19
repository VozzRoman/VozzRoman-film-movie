import { fetchSearch } from "./api";
import { createMarkUp } from "./renderPopularFilm";
import { fetchGenres } from "./api";
import { resf } from "./ref";
import { renderMainPage } from "./main";
import { showPaginationSearch } from "./pagination";
import { options } from "./pagination";
import { paginationSearch } from "./pagination";


page = 1;
let searchQuery = '';

resf.formEl.addEventListener('submit', clickOnSubmit);

function clickOnSubmit(e) {
	e.preventDefault();
	console.log(e.currentTarget.elements.search.value);
	searchQuery = e.currentTarget.elements.search.value;
		
	if (searchQuery === '') {
		resf.warrMessage.textContent = 'type something';
		return;
	}
	if (searchQuery.length > 0) {
		console.log(searchQuery);
		resf.warrMessage.textContent = '';
		clearContainer()
		
		renderSearchPage()
		paginationSearch.movePageTo(options.page);
		

	} else {
		renderMainPage(page);
	}
	resf.formEl.reset();
	
}




export async function renderSearchPage(page) {
	try {
	const promis = await fetchSearch(page, searchQuery);
		const data = promis.results;
		
	if (data.length === 0) {
		resf.warrMessage.textContent = 'no matches in this library';
		return;
	
	}
		clearContainer();
		const getGen = await fetchGenres();
		resf.warrMessage.textContent = '';
		createMarkUp(data, getGen.genres);
		
		showPaginationSearch(promis.total_pages);
		
		return data;


	} catch (error) {
		console.log(error)
	}
}


function clearContainer() {
	resf.containerFilms.innerHTML = '';
}
