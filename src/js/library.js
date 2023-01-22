import { getData } from "./localStorage";
console.log('ok');

if (document.title === 'library') {
	const film = getData();
			console.log(film);
};