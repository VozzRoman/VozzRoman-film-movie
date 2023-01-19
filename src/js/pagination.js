
import Pagination from 'tui-pagination';
import { renderMainPage } from './main';
import { renderSearchPage } from './search';
import { resf } from './ref';


const mainContainerPagination = document.getElementById('mainContainerPagination');
const searchPagePagination = document.getElementById('searchPagePagination');
// resf.searchPagination.style.display = 'none';



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
const pagination = new Pagination(mainContainerPagination, options)
console.log(pagination);
pagination.on('afterMove', onPaginationMove);

function onPaginationMove({ page }) { 
  clearGalary();
  renderMainPage(page);
  
 

}

export function showPaginationTrended(totalPages) {
  pagination.setTotalItems(totalPages)
  resf.mainPagepagination.style.display = 'flex';
  resf.searchPagination.style.display = 'none';
  
}



// Пагинация поиска фильмов
export const paginationSearch = new Pagination(searchPagePagination, options)
console.log(paginationSearch);
paginationSearch.on('afterMove', onPaginationMove);

function onPaginationMove({ page }) {
  clearGalary()
  renderSearchPage(page)
 

}
 export function showPaginationSearch(totalPages) {
  paginationSearch.setTotalItems(totalPages)
  // paginationSearch.movePageTo(options.page)
  resf.mainPagepagination.style.display = 'none';
  resf.searchPagination.style.display = 'flex';
}

function clearGalary() {
  resf.containerFilms.innerHTML = '';
}
