
import Pagination from 'tui-pagination';
import { renderMainPage } from './main';
import { renderSearchPage } from './search';
import { resf } from './ref';


const mainContainerPaginationContainer = document.getElementById('mainContainerPagination');





export const options = {
  totalItems: 200,
  itemsPerPage: 1,
  visiblePages: 8,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'pagination-first-button',
  lastItemClassName: 'pagination-last-button',

  template: {
    page: '<a href="#" class="pagination-page-button">{{page}}</a>',
    currentPage: '<a class="pagination-active-button">{{page}}</a>',
    moveButton:
      '<a href="#" class="pagination-next-button">' +
        '<span class="pag-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pagination-disabled-button">' +
        '<span class="pag-ico-{{type}}">{{type}}</span>' +
      '</span>',
      moreButton:
      '<a href="#" class="pagination-more-button">' +
        '<span class="pag-ico-more"> </span>' +
      '</a>'

	}
}
  



//Пагинация популярных фильмов
const pagination = new Pagination(mainContainerPaginationContainer, options)
console.log(pagination);
pagination.on('afterMove', onPaginationMove); //колбек для перелистывания mainPage

function onPaginationMove({ page }) { 
  clearGalary();
  renderMainPage(page);
  
 

}

export function showPaginationTrended(totalPages) {
  pagination.setTotalItems(totalPages)
  resf.mainPagepagination.style.display = 'flex';
  resf.searchPagination.style.display = 'none';
  
}

//--------------------------------------------



export function showPaginationSearch(totalPages) {
const searchPagePaginationContainer = document.getElementById('searchPagePagination');
// Пагинация поиска фильмов
const paginationSearch = new Pagination(searchPagePaginationContainer, options)
console.log(paginationSearch);
  paginationSearch.on('afterMove', onPaginationSearchMove);
  
function onPaginationSearchMove({ page }) { //колбек для перелистывания searchPage
  renderSearchPage(page)
 

}
  paginationSearch.setTotalItems(totalPages)
  paginationSearch.movePageTo(options.page) // ререндр пагинаци на первую страницу
  resf.mainPagepagination.style.display = 'none';
  resf.searchPagination.style.display = 'flex';
}

function clearGalary() {
  resf.containerFilms.innerHTML = '';
}
