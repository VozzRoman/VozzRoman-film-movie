
import Pagination from 'tui-pagination';
import { fetchMainPage } from './api';

const container = document.getElementById('pagination');



const options = {
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
  



//пагінація для трендів
const pagination = new Pagination(container, options)

pagination.on('afterMove', onPaginationMove);

function onPaginationMove({ page }) { 
  fetchMainPage(page)
  // renderSearchFilms(page)

}

export function showPaginationTrended(totalPages) {
  pagination.setTotalItems(totalPages)
  pagination.movePageTo(options.page)
}