function noselect(){return false;} function select(){return true;} document.ondragstart = noselect; document.onselectstart = noselect;
import {GifsInLibraryCreate,DeleteById} from './CollectionLogic.js';

let CollectionWindow = document.querySelector(".Collection");
let shopWindow = document.querySelector(".shopWindow");
let SettingsWindow = document.querySelector(".SettingsWindow");

//кнопки для открытия окон
const CloseWindow = document.querySelectorAll("#CloseWindowbutton");

function OpenWindow(WindowName){ WindowName.style.display = "block"}
CollectionOpen.onclick=function(){
	GifsInLibraryCreate();
	OpenWindow(CollectionWindow);
}

OpenSettingsButton.onclick=function(){OpenWindow(SettingsWindow);}
OpenShopWindow.onclick=function(){OpenWindow(shopWindow);}

export function AutoCloseWindows(){
	if(CollectionWindow.style.display != "none"){DeleteById("DeleteThis");}
	CollectionWindow.style.display = "none";
	shopWindow.style.display = "none";
	SettingsWindow.style.display = "none";
	achievements.style.display = "none";
}

CloseWindow.forEach(button => {
	button.addEventListener("click",(event)=>
	{
		AutoCloseWindows();
	});
});

export function Alert(Messege,description,img,time,skip){
	const alertwindow = document.createElement("form");
	const text = document.createElement("text");
	const Image = document.createElement("img");
	const descriptiontext = document.createElement("text");
	alertwindow.style.height = "100%";
	alertwindow.style.width = "100%";
	alertwindow.id = "Alert";

	alertwindow.style.zIndex = 30;
	text.textContent = Messege;
	text.style.fontSize = "larger";

	descriptiontext.textContent = description;
	descriptiontext.style.color = "#9dff7d";
	descriptiontext.style.fontSize = "large";
	descriptiontext.style.marginTop = "1em";

	Image.src = img;
	Image.style.marginTop = "16px";
	Image.style.maxHeight = "42vh";
	Image.style.maxWidth = "42vh";
	Image.style.borderRadius = "0px";

	alertwindow.append(text,Image,descriptiontext);
	document.querySelector("body").append(alertwindow);
	setTimeout(() => {
		alertwindow.style.opacity = 100;
		var sound = new Audio();
		sound.volume = document.getElementById('ChangeSystemSound').value * 4;
		sound.src = "Audio/Sounds/Popup.mp3";
		sound.play();
	},0);
	setTimeout(() => {alertwindow.style.opacity = 0;},time-300);
	setTimeout(() => {
		Image.src = "";
		alertwindow.remove();
		var sound = new Audio();
		sound.volume = document.getElementById('ChangeSystemSound').value;
		sound.src = "Audio/Sounds/Popdown.mp3";
		sound.play();
	},time);
	if(skip == true){
		alertwindow.onclick = function(){
			alertwindow.style.transition = "0.5s ease-in-out"
			alertwindow.style.opacity = 0;
			setTimeout(() => {Image.src = "";alertwindow.remove();},550)
		}
	}

}