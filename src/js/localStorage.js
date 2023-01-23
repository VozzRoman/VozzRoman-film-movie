
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
		
			let id = null;
			getData();
			async function clickOnModalButton(e) {
				let newArray = [];
			
			id = Number(e.target.dataset.id);
				// console.log(id);
				putData(id);
				const sameId = getData();
				for (let id of sameId) {
					if (sameId.includes(id)) {
						newArray.push(id);
						console.log(newArray);
						return newArray;
					}
				
				}
				
				
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

//----localButton

// export function getButton(){
// 	const dataLocalStorage = localStorage.getItem(KEY__BUTTON);
// 	if(dataLocalStorage !== null) {
// 		return JSON.parse(dataLocalStorage);
// 	}
// 	return [];
// }

// export function putButton(data){ 
// 	let filmCardBth = getData();
// 	filmCardBth.push(data);
// 	localStorage.setItem(KEY__BUTTON, JSON.stringify(filmCardBth));

// }
