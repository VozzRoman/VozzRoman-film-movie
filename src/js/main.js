
//links to element
const formEl = document.querySelector('#header__form-js');
const containerFilms = document.querySelector('.body__list');
const containerPagination = document.querySelector('#pagination');



//Varibles TDM
const TRAIDIN__URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=45e036602b450491912e4761702a27c4';
const SEARCH__URL = 'https://api.themoviedb.org/3/search/movie?api_key=45e036602b450491912e4761702a27c4&language=en-US&page=1&include_adult=false';
let IMAGE__BASE = 'https://image.tmdb.org/t/p/w500'
const GENERS__URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=45e036602b450491912e4761702a27c4&language=en-US'
const API__KEY = '45e036602b450491912e4761702a27c4';
const MOVIE__ID = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=45e036602b450491912e4761702a27c4&language=en-US'
const TRAILER__ID = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=45e036602b450491912e4761702a27c4&language=en-US'

//Form
formEl.addEventListener('submit', clickSubmit);

let searchQery = '';

function clickSubmit(e) {
    e.preventDefault();
    searchQery = e.target.name.value;
    
}

renderMainPage();

function renderMainPage() {
    fetch(TRAIDIN__URL)
    .then(r => r.json())
        .then(data => data.results)
        .catch(error => console.log(error));
    console.log(data)
}


