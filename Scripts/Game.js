// import { GifCoin, priceAnother} from "./script.js";
// export function upgrade (id,addmultiply,addprice) {
// 	if(GifCoin >= priceUpgrades[id]){
// 		StatsCountUpgrades[id] += 1;
// 		GifCoin -= priceUpgrades[id];
// 		multiply[id] += addmultiply;
// 		priceUpgrades[id] += addprice+multiply[id];
// 		localStorage.setItem('UpgradesPrice',JSON.stringify(priceUpgrades));
// 		localStorage.setItem('Upgrades',JSON.stringify(multiply));
// 		textcountupdate();
// 		var sound = new Audio();
// 		sound.volume = document.getElementById('ChangeSystemSound').value;
// 		sound.src = "Audio/Sounds/BuyConfirm.mp3";
// 		sound.play();
// 	}
// 	else{
// 		Alert("Not enough funds","Not enough: " + (priceUpgrades[id]-GifCoin).toFixed(1) + " GIFcoin","https://media.tenor.com/Fbc1ES3oTE4AAAAi/confused-shocked.gif",1500,true);
// 	}
// }
// export function GifRefresh(){
// 	if(GifCoin >= priceAnother[0]){
// 		GifCoin -= priceAnother[0];
// 		priceAnother[0] += 2;
// 		var sound = new Audio();
// 		sound.volume = document.getElementById('ChangeSystemSound').value;
// 		sound.src = "Audio/Sounds/NewGif.mp3";
// 		sound.play();
// 		nextImage();
// 		textcountupdate();
// 	}
// 	else{
// 		Alert("Not enough funds","Not enough: " + (priceAnother[0]-GifCoin).toFixed(1) + " GIFcoin","https://media.tenor.com/Fbc1ES3oTE4AAAAi/confused-shocked.gif",1500,true);
// 	}
// }