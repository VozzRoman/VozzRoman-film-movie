
import { fetchById } from "./api";

const LOCAL__KEY = 'filmLibarary';
export const  KEY__BUTTON = 'buttonAdd';




export function saveLoadFilm() {
	
	

		setTimeout(() => {
		// const buttonList = document.querySelector('.button__list');
		// 	console.log(buttonList);
			const addButton = document.querySelector('button[data-id]');
			addButton.textContent = 'add to Watched';
		console.log(addButton);
			addButton.addEventListener('click', clickOnModalButton);
		
			async function clickOnModalButton(e) {
				
			
			id = Number(e.target.dataset.id);
			putData(id);
			
				
				
				
			// const promise = await fetchById(id);
			// const data = promise;
			// console.log(data);
				
				
			// const film = getData();
			// console.log(film);
			// film.map(el => console.log(el.id));
			
			}
			
			
	},1000);
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

export function deleteStorage() {
	localStorage.removeItem(LOCAL__KEY);
}




