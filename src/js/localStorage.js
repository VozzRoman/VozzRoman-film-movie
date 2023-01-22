
import { fetchById } from "./api";

const LOCAL__KEY = 'filmLibarary';




export  function saveLoadFilm() {
		setTimeout(() => {
		const buttonList = document.querySelector('.button__list');
		console.log(buttonList);
		buttonList.addEventListener('click', clickOnModalButton);
			async function clickOnModalButton(e) {

			// let libararyArray = [];
				
			if (e.target.nodeName !== 'BUTTON') {
				return;
			}
			
			const id = Number(e.target.dataset.id);
			console.log(id);
			const promise = await fetchById(id);
			const data = promise;
			console.log(data);
			const libaray = localStorage.getItem(LOCAL__KEY);
				if (libaray === null) {
				
				localStorage.setItem(LOCAL__KEY, JSON.stringify(data));
					console.log(localStorage.getItem(LOCAL__KEY));
				
		
			}
			
		}
	},500);
}