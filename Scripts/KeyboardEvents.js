import {GifRefresh} from './WindowLogics/Clicker.js';
import {AutoCloseWindows} from './WindowLogics/WindowLogic.js';
window.addEventListener('keyup',function(event){
	if(event.key == " "){
		let temparray = JSON.parse(localStorage.getItem("SearchImage"))
		GifRefresh(temparray[0]);
	}
})
window.addEventListener('keyup',function(event){
	if(event.key == "Escape"){
		AutoCloseWindows();
	}
})