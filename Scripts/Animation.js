import {multiply,priceAnother} from "./script.js";
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// function gifCoinAnim(){
// 	setTimeout(() => {document.getElementById("count").style.transform = "translate(0px,-5%)"; document.getElementById("count").style.opacity = 0.4},800);
// 	setTimeout(() => {document.getElementById("count").style.transform = "translate(0px,0%)"; document.getElementById("count").style.opacity = 1},1000);
// }

// export function AddAnimation(id,Type){
//     let randomX = Math.floor(Math.random() * screenWidth-100);
//     let randomY = Math.floor(Math.random() * screenHeight-50);
//     const container = document.querySelector("body");
//     const text = document.createElement("text");
//     text.style.cssText = "color:white;transition:0.5s ease-in;marginTop:0px; position:absolute; opacity:100%;";
// 	if(multiply[id] != 0 && Type=="AllUpgrades"){
// 		text.textContent = "+" + multiply[id].toFixed(1) + " Gifcoins";
// 		container.appendChild(text);
// 		text.style.left = randomX + "px";
// 		text.style.top = randomY + "px";
// 		gifCoinAnim();
// 	}
// 	else if(Type == "Clicker"){
// 		function a (event){
// 			text.textContent = " +" + multiply[id].toFixed(1)+ "";
// 			container.appendChild(text);
// 			text.style.left = (event.pageX - 25) + "px";
// 			text.style.top = (event.pageY - 20) + "px";
// 			gifCoinAnim();
// 		}
// 		a(event);
// 	}
//     setTimeout(() => {text.style.opacity = "0%"; text.style.filter = "blur(10px)"; text.style.transform = "scale(1,1) translate(0px,-100%)"; },500);
//     setTimeout(() => {text.remove()},1000);
// }
// export function substractAnimation (id,Type) {
//     let randomX = Math.floor(Math.random() * screenWidth-100);
//     let randomY = Math.floor(Math.random() * screenHeight-50);

// 	const container = document.querySelector("body");
// 	const text = document.createElement("text");
// 	text.style.cssText = "color:#a14545;transition:1s ease-in;marginTop:0px; position:absolute; opacity:100%; text-wrap:wrap;";
	
//     if(Type == "Upgrade"){
// 		text.textContent = " - " + priceUpgrades[id].toFixed(0) + "";
// 		text.style.zIndex = "5";
// 		container.appendChild(text);
// 		text.style.left = randomX + "px";
// 		text.style.top = randomY + "px";
// 	}
// 	else if (Type == "UpgradeAnother"){
// 		text.textContent = "-" + priceAnother[id].toFixed(0) + "🔘";
// 		container.appendChild(text);
// 		text.style.left = randomX + "px";
// 		text.style.top = randomY + "px";
// 	}
// 	setTimeout(() => {text.style.opacity = "0%"; text.style.filter = "blur(10px)"; text.style.transform = "scale(0,0) translate(0px,100%"; },500);
// 	setTimeout(() => {text.remove()},1000);
// }
export function GifAppendCollection(){
    const gif = document.createElement("img");
    const container = document.createElement("div");
    gif.src = document.getElementById("Main").src;
    gif.style.transition = "0.6s ease-out";
    container.style.cssText = "z-index:-1;position:absolute;height:100%;width:100%;display:flex;flex-direction: column;vertical-align:middle;align-items:center;justify-content:center;";
    container.append(gif);
    document.querySelector("body").append(container);
    setTimeout(() => {gif.style.transform = "translate(250%,-100%) scale(0,0)"},0);
    setTimeout(() => {container.remove()},1100);
}