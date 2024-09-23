function noselect(){return false;} function select(){return true;} document.ondragstart = noselect; document.onselectstart = noselect;
import {GifsInLibraryCreate,DeleteById} from './CollectionLogic.js';

let CollectionWindow = document.querySelector("#Collection");
let shopWindow = document.querySelector("#shopWindow");
let SettingsWindow = document.querySelector("#SettingsWindow");
let MainWindow = document.querySelector("#MainWindow");

//кнопки для открытия окон
const CloseWindow = document.querySelectorAll("#CloseWindowbutton");

function OpenWindow(WindowName){
	setTimeout(()=> WindowName.style.opacity = 1,1);
	WindowName.style.display = "block"
}
CollectionOpen.onclick=function(){
	GifsInLibraryCreate();
	OpenWindow(CollectionWindow);
}

OpenShopWindow.onclick=function(){OpenWindow(shopWindow);}

export function AutoCloseWindows(){
	if(CollectionWindow.style.display == "block")
		DeleteById("DeleteThis");

	shopWindow.style.opacity = 0;
	SettingsWindow.style.opacity = 0;
	achievements.style.opacity = 0;
	CollectionWindow.style.opacity = 0;
	setTimeout(()=> {
		shopWindow.style.display = "none";
		SettingsWindow.style.display = "none";
		achievements.style.display = "none";
		CollectionWindow.style.display = "none";
	},300);

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
	alertwindow.style.height = "150px";
	alertwindow.style.width = "200px";
	alertwindow.style.padding = "16px";
	// alertwindow.style.right = "16px";
	// alertwindow.style.bottom = "16px"
	alertwindow.id = "Alert";

	alertwindow.style.zIndex = 30;
	text.textContent = Messege;
	text.style.fontSize = "medium";

	descriptiontext.textContent = description;
	descriptiontext.style.color = "#9dff7d";
	descriptiontext.style.fontSize = "medium";
	descriptiontext.style.marginTop = "1em";

	Image.src = img;
	Image.style.marginTop = "16px";
	Image.style.maxHeight = "42%";
	Image.style.maxWidth = "42%";
	Image.style.borderRadius = "0px";

	alertwindow.append(text,Image,descriptiontext);
	document.querySelector("body").append(alertwindow);
	setTimeout(() => {
		alertwindow.style.opacity = 100;
		var sound = new Audio();
		sound.volume = document.getElementById('ChangeSystemSound').value * 4;
		sound.src = "../Audio/Sounds/Popup.mp3";
		sound.play().catch(()=>{});
	},0);
	setTimeout(() => {alertwindow.style.opacity = 0;},time-300);
	setTimeout(() => {
		Image.src = "";
		alertwindow.remove();
		var sound = new Audio();
		sound.volume = document.getElementById('ChangeSystemSound').value;
		sound.src = "../Audio/Sounds/Popdown.mp3";
		sound.play().catch(()=>{});
	},time);
	if(skip == true){
		alertwindow.onclick = function(){
			alertwindow.style.transition = "0.5s ease-in-out"
			alertwindow.style.opacity = 0;
			setTimeout(() => {Image.src = "";alertwindow.remove();},550)
		}
	}

}