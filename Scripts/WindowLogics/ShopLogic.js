import {GifRefresh, multiply, priceAnother, priceUpgrades,upgrade,GifCoin} from '../script.js';
import {ThemeApply} from "../WindowLogics/SettingsLogic.js";
let CurrentPage = 0;
let categories = ["Changes gif:","Upgrade clicks:","Upgrade autoclicks:","Coming Soon"];
let categorieBuy = ["ChangeGif","ClickUpgrade","AutoClickUpgrade"];
let ProductImage = ["https://media.tenor.com/PxoS152OMWwAAAAi/%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5.gif","https://media.tenor.com/5tvr3R-VgtEAAAAi/kyoko-toshino.gif","https://media.tenor.com/hgR97aG7R2YAAAAi/the-helpful-fox-senko-san-blushing.gif","https://media.tenor.com/fVcCLR2YQXUAAAAi/funny-anime.gif"];

let PreviousPage = document.getElementById("PreviousProduct");
let NextPage = document.getElementById("NextProduct");

function Update(){
	let title = document.createElement("text");
	let ProductBlock = document.createElement("div");
	let buyIcon = document.createElement("img");
	let Productimg = document.createElement("img");
	let ButtonContainer = document.createElement("div");
	let PriceText = document.createElement("text");
	let BuyButton = document.createElement("button");
	let StickersContainer = "";
	let StickersText = "";
	let CheckBox = "";
	let Input = "";
	let hidden = document.createElement("input");

	let InfoBorder = document.createElement("div");
	
	InfoBorder.style.cssText = "display:flex; flex-direction:row; width:100%; justify-content:center;";

	InfoBorder.className = "InfoBorder";
	InfoBorder.id = "InfoBorder";

	function updateText(priceFlag){
		switch(priceFlag){
			case 1:
				PriceText.textContent = " Purchase cost: " + priceAnother[CurrentPage].toFixed(1) + " Gifcoins";
			break;
			case 2:
				PriceText.textContent = " Purchase cost: " + priceUpgrades[CurrentPage-1].toFixed(1) + " Gifcoins";
			break;
		}
	}

	switch(categorieBuy[CurrentPage]){
		case "ChangeGif":
			updateText(1);

			Input = document.createElement("input");
			Input.style.width = "16em";
			Input.type = "text";
			Input.className = "Search";
			Input.placeholder = localStorage.getItem("SearchImage")
	
			CheckBox = document.createElement("input");
			CheckBox.type = "checkbox";
			CheckBox.className = "stickers";
			
			StickersText = document.createElement("text");
			StickersText.textContent = "Only stickers: ";
	
			StickersContainer = document.createElement("div");
			StickersContainer.style.cssText = "display:flex; flex-direction:row; margin:16px 15px;";
			StickersContainer.append(StickersText,CheckBox);

			Input.onchange = function(){
				if(document.querySelector(".Search").value != null){
					localStorage.setItem('SearchImage', document.querySelector(".Search").value);
				}
				GifRefresh();
			}

			BuyButton.addEventListener("click",()=>{
				if(document.querySelector(".Search").value != null){
					localStorage.setItem('SearchImage', document.querySelector(".Search").value);
				}
				GifRefresh();
				updateText(1);
			})
		break;
		case "ClickUpgrade":
			updateText(2);
			BuyButton.addEventListener("click",()=>{
				updateText(2);
				upgrade(0,0.16,0.15);
				updateText(2);
			})
		break;
		case "AutoClickUpgrade":
			updateText(2);
			BuyButton.addEventListener("click",()=>{
				updateText(2);
				upgrade(1,0.16,0.15);
				updateText(2);
			})
		break;
		default:
			BuyButton.textContent = "";
			BuyButton.className = "hidden";
		break;
	}
	for(let i = 0; i < categories.length; i++){
		let CurrentPageDisplay = document.createElement("div");
		CurrentPageDisplay.style.cssText = "padding:7px 14px; background-color:White; border: 2px solid transparent; border-radius:16px; margin:0px 4px 8px 4px; transition:0.2s ease-in-out;";
		CurrentPageDisplay.id = i;
		//Изменение для перехода на другую страницу и для изменение визуального стиля
		if(CurrentPageDisplay.id != CurrentPage){
			CurrentPageDisplay.style.backgroundColor = "rgba(255,255,255,0.4)";
			CurrentPageDisplay.style.cursor = "pointer";
			CurrentPageDisplay.onmouseover = function(){
				CurrentPageDisplay.style.border = "2px solid white";
				CurrentPageDisplay.style.backgroundColor = "rgba(255,255,255,0.6)";
			}
			CurrentPageDisplay.onmouseleave = function(){
				CurrentPageDisplay.style.border = "2px solid transparent";
				CurrentPageDisplay.style.backgroundColor = "rgba(255,255,255,0.4)";
				
			}
			//Переход на другую страницу
			CurrentPageDisplay.addEventListener("click", ()=>{
				document.querySelector(".ProductBlock").remove();
				document.querySelector(".InfoBorder").remove();
				CurrentPage = Number(CurrentPageDisplay.id);
				Update();
			})
		}
		InfoBorder.append(CurrentPageDisplay);
	}

	hidden.className = "hidden";

	buyIcon.className = "buttonimg";
	buyIcon.style.cssText = "margin:0px 0px -6px 0px;";
	buyIcon.src = "Pictures/Icons/buy.svg";

	Productimg.src = ProductImage[CurrentPage]
	Productimg.style.cssText = "max-height:42vh;max-width:42vh;margin-top:16px;";

	ProductBlock.className = "ProductBlock";

	title.textContent = categories[CurrentPage];
	title.style.fontSize = "larger";

	BuyButton.textContent = "Buy";
	BuyButton.type = "button";

	BuyButton.prepend(buyIcon);
	
	ButtonContainer.append(BuyButton,PriceText)
	ProductBlock.append(title,StickersContainer,Input,hidden,Productimg,ButtonContainer);
	document.querySelector("#ProductAppend").append(ProductBlock,InfoBorder);
	document.querySelector("#ProductAppend").style.position = "absolute";
	ThemeApply();

	ProductBlock.addEventListener("wheel",(event)=>{
		if(0 > event.deltaY){
			GoNextPage();
		}
		else{
			GoPreviousPage();
		}	
	})
}
Update();

function GoPreviousPage(){
	if(CurrentPage != 0){
		document.querySelector(".ProductBlock").remove();
		document.querySelector(".InfoBorder").remove();
		CurrentPage -= 1;
		Update();
	}
	else if(CurrentPage == 0){
		document.querySelector(".ProductBlock").remove();
		document.querySelector(".InfoBorder").remove();
		CurrentPage = categories.length-1;
		Update();
	}
}
function GoNextPage(){
	console.log(CurrentPage)
	if(CurrentPage != categories.length-1){
		document.querySelector(".ProductBlock").remove();
		document.querySelector(".InfoBorder").remove();
		CurrentPage += 1;
		Update();
	}
	else if(CurrentPage <= categories.length-1){
		document.querySelector(".ProductBlock").remove();
		document.querySelector(".InfoBorder").remove();
		CurrentPage =  0;
		Update();
	}
}
PreviousPage.addEventListener("click", ()=>{GoPreviousPage();})
NextPage.addEventListener("click", ()=>{GoNextPage();})