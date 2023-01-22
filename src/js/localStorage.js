
import { fetchById } from "./api";


export  function saveLoadFilm() {
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


			
		}
	},500);
}