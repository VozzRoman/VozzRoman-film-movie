
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
			let localData = JSON.parse(localStorage.getItem(LOCAL__KEY));
			if (!localData) {
				localData = [];
			}
				localData.push(data);
			}
			
			
	},500);
}
