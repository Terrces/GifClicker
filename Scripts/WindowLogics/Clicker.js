// import GameInfo from "../Data/GameInfo.json" with{type: 'json'}
import * as animation from "../Animation.js";
import {nextImage} from '../Api/GifUpdate.js';
import {Alert} from "./WindowLogic.js";
let GameInfoFetch = await fetch("https://raw.githubusercontent.com/Terrces/GifClicker/main/GameInfo.json");
let GameInfo = await GameInfoFetch.json();

export var GifCoin = 0;
export let GifLibrary = [];
export let StatsCountUpgrades=[0,0,0];
export let priceUpgrades = [1,5];
export let priceAnother = [2];
export let multiply = [1,0];

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
		sound.volume = document.getElementById('ChangeSystemSound').value;
		sound.src = "../Audio/Sounds/BuyConfirm.mp3";
		sound.play().catch(()=>{});
	}
	else{
		Alert("Not enough: " + (priceUpgrades[id]-GifCoin).toFixed(1) + " GIFcoin","","https://media.tenor.com/Fbc1ES3oTE4AAAAi/confused-shocked.gif",1500,true);
	}
}

export function GifRefresh(){
	if(GifCoin >= priceAnother[0]){
		GifCoin -= priceAnother[0];
		priceAnother[0] += 2;
		document.getElementById("Main").style.opacity = 0;
		setTimeout(() => {
			document.getElementById("Main").style.opacity = 1;
		},400)
		var sound = new Audio();
		sound.volume = document.getElementById('ChangeSystemSound').value;
		sound.src = "../Audio/Sounds/NewGif.mp3";
		sound.play().catch(()=>{});
		nextImage();
		textcountupdate();
	}
	else{
		Alert("Not enough funds","Not enough: " + (priceAnother[0]-GifCoin).toFixed(1) + " GIFcoin","https://media.tenor.com/Fbc1ES3oTE4AAAAi/confused-shocked.gif",1500,true);
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
		sound.volume = document.getElementById('ChangeSystemSound').value;
		sound.src = "../Audio/Sounds/AddGif.mp3";
		sound.play().catch(()=>{});
		avalible = false;
	}
	else if(avalible == false)
	{
		Alert("You have already added this gif","","https://media.tenor.com/VIrdreHaxiEAAAAi/alymew-aly.gif",1000,true)
	}
	else{
		Alert("Not enough funds","Not enough: " +(priceAnother[1]-GifCoin).toFixed(1) + " GIFcoins","",1000,true);
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
	let gifcoinsNames = ["GIFCoin"," GIFCoins"];
	localStorage.setItem('coins',GifCoin);
	
	GifRefresh1.textContent = GifRefresh.textContent = "Price:" + Math.ceil(priceAnother[0]) + gifcoinsNames[1];
	document.querySelector(".money").textContent = gifcoinsNames[1]+ ": " + GifCoin.toFixed(1);

	document.querySelector(".count").textContent =  gifcoinsNames[1]+ ": "+ GifCoin.toFixed(1);
}
textcountupdate();
export default GifLibrary;
setInterval(function(){
	GifCoin += multiply[1]; textcountupdate();
},1000);