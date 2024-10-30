// import GameInfo from "../Data/GameInfo.json" with{type: 'json'}
import * as animation from "../Animation.js";
import {nextImage} from '../Api/GifUpdate.js';
import {Alert} from "./WindowLogic.js";

// основные переменные
export var GifCoin = 0;
export let GifLibrary = [];
export let StatsCountUpgrades=[0,0,0];
export let priceUpgrades = [1,5];
export let priceAnother = [2];
export let multiply = [1,0];

let TranslateAlertsFetch = await fetch("../Data/TranslateAlerts.json");
let TranslateAlerts = await TranslateAlertsFetch.json();
let TranslateFetch = await fetch("../Data/Translate.json");
let Translate = await TranslateFetch.json()

let Lang = localStorage.getItem("lang");

if(localStorage.getItem('coins') != null){
	GifCoin = JSON.parse(localStorage.getItem('coins'));
}
if(localStorage.getItem('Upgrades') != null){
	multiply = JSON.parse(localStorage.getItem('Upgrades'));
}
if(localStorage.getItem('UpgradesPrice') != null){
	priceUpgrades = JSON.parse(localStorage.getItem('UpgradesPrice'));
}
if(localStorage.getItem('GifCollection') != null){
	GifLibrary = JSON.parse(localStorage.getItem('GifCollection'));
}

export function upgrade (id,addmultiply,addprice) {
	if(GifCoin >= priceUpgrades[id]){
		StatsCountUpgrades[id] += 1;
		GifCoin -= priceUpgrades[id];
		multiply[id] += addmultiply;
		priceUpgrades[id] += addprice+multiply[id];
		localStorage.setItem('UpgradesPrice',JSON.stringify(priceUpgrades));
		localStorage.setItem('Upgrades',JSON.stringify(multiply));
		textcountupdate();
		var sound = new Audio();
		sound.volume = localStorage.getItem("volume");
		sound.src = "/Audio/Sounds/BuyConfirm.mp3";
		sound.play().catch(()=>{});
	}
	else{
		Alert(TranslateAlerts[Lang].clicker.lack  + (priceUpgrades[id]-GifCoin).toFixed(1) + " GIFcoin","","https://media.tenor.com/Rb5rxSBr27YAAAAi/jinzhan-lily-and-marigold.gif",1800,true);
	}
}

export function GifRefresh(search){
	if(GifCoin >= priceAnother[0]){
		GifCoin -= priceAnother[0];
		priceAnother[0] += 1.2;
		document.getElementById("Main").style.opacity = 0;
		setTimeout(() => {
			document.getElementById("Main").style.opacity = 1;
		},600)
		var sound = new Audio();
		sound.volume = localStorage.getItem("volume");
		sound.src = "/Audio/Sounds/NewGif.mp3";
		sound.play().catch(()=>{});
		nextImage(search);
		textcountupdate();
	}
	else{
		Alert(TranslateAlerts[Lang].clicker.lack  + (priceAnother[0]-GifCoin).toFixed(1),"" + " GIFcoin","https://media.tenor.com/eH4X6fy69gsAAAAi/jinzhan-lydia.gif",1800,true);
	}

}

function AppendGifInCollection(){
	let avalible = true;

	for(let i = 0;i < GifLibrary.length;i++){
		if(document.getElementById("Main").src == GifLibrary[i]){
			avalible = false;
		}	
	}
	if(avalible == true){
		//animation.GifAppendCollection();
		GifLibrary.push(document.getElementById("Main").src);
		localStorage.setItem('GifCollection',JSON.stringify(GifLibrary));
		var sound = new Audio();
		sound.volume = localStorage.getItem("volume");
		sound.src = "/Audio/Sounds/AddGif.mp3";
		sound.play().catch(()=>{});
		avalible = false;
	}
	else if(avalible == false)
	{
		Alert(TranslateAlerts[Lang].clicker.collection_duplicate,"","https://media.tenor.com/VIrdreHaxiEAAAAi/alymew-aly.gif",1000,true)
	}
	else{
		Alert(TranslateAlerts[Lang].clicker.lack  + (priceAnother[0]-GifCoin).toFixed(1),"" + " GIFcoins","",1000,true);
	}
}


clicker.addEventListener("click", function (){
	GifCoin += multiply[0];
	textcountupdate();
	setTimeout(() => {document.getElementById("Main").style.transform = "scale(1,1)";},100);
	document.getElementById("Main").style.transform = "scale(0.99,0.99)";
})

document.getElementById("AppendInCollection").onclick = function(){AppendGifInCollection();}
document.querySelector("#BuyGifRefresh").addEventListener("click",(event)=>{GifRefresh();})

async function textcountupdate (){
	localStorage.setItem('coins',GifCoin);
	
	GifRefresh1.textContent = GifRefresh.textContent = Translate[Lang].general.price + ": " + Math.ceil(priceAnother[0]) + " " + Translate[Lang].general.currencies;
	document.querySelector(".money").textContent = Translate[Lang].general.currencies+ ": " + GifCoin.toFixed(2);

	document.querySelector(".count").textContent =  Translate[Lang].general.currencies+ ": "+ GifCoin.toFixed(2);
}
textcountupdate();
export default GifLibrary;
setInterval(function(){
	GifCoin += multiply[1]; textcountupdate();
},1000);