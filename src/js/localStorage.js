
import { fetchById } from "./api";

const LOCAL__KEY = 'filmLibarary';




export function saveLoadFilm() {
	
	

		setTimeout(() => {
		const buttonList = document.querySelector('.button__list');
		console.log(buttonList);
		buttonList.addEventListener('click', clickOnModalButton);
			async function clickOnModalButton(e) {

			
				
			if (e.target.nodeName !== 'BUTTON') {
				return;
			}
			
			const id = Number(e.target.dataset.id);
			console.log(id);
			const promise = await fetchById(id);
			const data = promise;
			console.log(data);
				putData(data);
			// const film = getData();
			// console.log(film);
			// film.map(el => console.log(el.id));
			
			}
			
	},500);
}


export function getData(){
	const dataLocalStorage = localStorage.getItem(LOCAL__KEY);
	if(dataLocalStorage !== null) {
		return JSON.parse(dataLocalStorage);
	}
	return [];
}

export function putData(data){ 
	let filmCard = getData();
	filmCard.push(data);
	localStorage.setItem(LOCAL__KEY, JSON.stringify(filmCard));

}