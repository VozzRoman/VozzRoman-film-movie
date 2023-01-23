
import { fetchById } from "./api";

const LOCAL__KEY = 'filmLibarary';




export function saveLoadFilm() {
	
	

		setTimeout(() => {
		// const buttonList = document.querySelector('.button__list');
		// 	console.log(buttonList);
			const addButton = document.querySelector('button[data-id]');
			const removeButton = document.querySelector('#remove-wached');
			console.log(removeButton);
		console.log(addButton);
			addButton.addEventListener('click', clickOnModalButton);

			let id = null;
			
			async function clickOnModalButton(e) {
	
			id = Number(e.target.dataset.id);
			console.log(id);
			// const promise = await fetchById(id);
			// const data = promise;
			// console.log(data);
				putData(id);
				
			// const film = getData();
			// console.log(film);
			// film.map(el => console.log(el.id));
			
			}
			removeButton.addEventListener('click', clickOnRemoveButton);
			async function clickOnRemoveButton() {
				console.log('ok');
				const promise = await fetchById(id);
				const data = promise;
				console.log(data)
				deleteStorage()
			
		
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
