import { resf } from "./ref";

resf.containerFilms.addEventListener('click', onCLickFilm);

function onCLickFilm(e) {
    e.preventDefault();
    if (e.target.nodeName === "H2") {
        console.log('ok');
   }
}
