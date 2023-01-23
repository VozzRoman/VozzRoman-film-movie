
import { fetchById } from "./api";

const LOCAL__KEY = 'filmLibarary';
export const  KEY__BUTTON = 'buttonAdd';




export function saveLoadFilm() {
	
	

		setTimeout(() => {
		// const buttonList = document.querySelector('.button__list');
		// 	console.log(buttonList);
			const addButton = document.querySelector('button[data-id]');
			const removeButton = document.querySelector('button[data-removeId]');
			console.log(removeButton);
			console.log(addButton);
			addButton.addEventListener('click', clickOnModalButton);
			removeButton.addEventListener('click', clickOnRemoveButton);
		
			async function clickOnModalButton(e) {
				
			const id = Number(e.target.dataset.id);
			putData(id);
		
			// const promise = await fetchById(id);
			// const data = promise;
			// console.log(data);		
			// const film = getData();
			// console.log(film);
			// film.map(el => console.log(el.id));
			
			}

			function clickOnRemoveButton(e) {
			const	id = Number(e.target.dataset.removeid);
				console.log(id);
				const getIdDelete = getData();
				console.log(getIdDelete);
				
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
	let filmCard = getData(); // []
	const index = filmCard.indexOf(data);
	if (index === -1) {
		filmCard.push(data);
	} else {
		filmCard.splice(index, 1);
	}
	
	localStorage.setItem(LOCAL__KEY, JSON.stringify(filmCard));

}

export function deleteStorage() {
	localStorage.removeItem(LOCAL__KEY);
}




