let PatchNotesFetch = await fetch("https://raw.githubusercontent.com/Terrces/GifClicker/main/PatchNotes.json");
let PatchNotes = await PatchNotesFetch.json()

const body = document.querySelector("body");
let button = document.querySelectorAll(".buttonimg");
const ShopProduct = document.querySelectorAll(".ProductBlock");
const darkness = document.getElementById("darkness");
const BackImg = document.querySelector("#BackgroundImage");
const BackgroundImagePosY = document.querySelector("#BackgroundImagePosY");
const BackgroundImagePosX = document.querySelector("#BackgroundImagePosX");
const BackgroundImageScale = document.querySelector("#BackgroundImageScale");
const repeat = document.querySelector("#ChoiseRepeat");

BackImg.onclick = function(){
	BackImg.value = "";
}

//0 = изображение; 1 = позицияУ; 2 = позицияХ; 3 = Повтор; 4 = Размер;
let BackImgStorage = ["","","",""];
let tempBackImg = JSON.parse(localStorage.getItem("BackImg"));
//Загрузка изображения
if(localStorage.getItem("BackImg") != null){
	BackImgStorage = tempBackImg;
	body.style.backgroundImage = "url("+BackImgStorage[0]+")";
	BackgroundImagePosY.value = BackImgStorage[1];
	BackgroundImagePosX.value = BackImgStorage[2];
	repeat.value = BackImgStorage[3];
	body.style.backgroundPositionY = BackImgStorage[1] + "%";
	body.style.backgroundPositionX = BackImgStorage[2] + "%";
	body.style.backgroundRepeat = BackImgStorage[3];
	body.style.backgroundSize = BackImgStorage[4] + "%";
}
BackImg.onchange = function(){
	BackImgStorage[0] = BackImg.value;
	body.style.backgroundImage = "url("+BackImgStorage[0]+")";
	localStorage.setItem("BackImg",JSON.stringify(BackImgStorage))
	ThemeApply();
}

BackgroundImagePosY.onchange = function(){
	BackImgStorage[1] = BackgroundImagePosY.value;
	body.style.backgroundPositionY = BackImgStorage[1] + "%";
	localStorage.setItem("BackImg",JSON.stringify(BackImgStorage))
}
BackgroundImagePosX.onchange = function(){
	BackImgStorage[2] = BackgroundImagePosX.value;
	body.style.backgroundPositionX = BackImgStorage[2] + "%";
	localStorage.setItem("BackImg",JSON.stringify(BackImgStorage))
}
repeat.onchange = function(){
	BackImgStorage[3] = repeat.value;
	body.style.backgroundRepeat = BackImgStorage[3]
	localStorage.setItem("BackImg",JSON.stringify(BackImgStorage))
}
BackgroundImageScale.onchange = function(){
	BackImgStorage[4] = BackgroundImageScale.value;
	body.style.backgroundSize = BackImgStorage[4] + "%";
	localStorage.setItem("BackImg",JSON.stringify(BackImgStorage))
}

export function ThemeApply(){
	let theme = localStorage.getItem("Theme");
	if(theme != null){
		if(theme >=100) {
			document.querySelectorAll(".buttonimg").forEach(btn => {
				btn.style.filter = "invert(0)";
			})
			ShopProduct.forEach(a => {
				a.style.color = "black";
				a.style.backgroundColor = "rgba(255,255,255,0.6);";
			})
			body.style.color = "black";
		}
		else {
			document.querySelectorAll(".buttonimg").forEach(btn => {
				btn.style.filter = "invert(1)";
			})
			ShopProduct.forEach(a => {
				a.style.color = "white";
				a.style.backgroundColor = "rgba(0,0,0,0.2);";
			})
			body.style.color = "white";
		}
	
		body.style.backgroundColor = "rgb("+theme+","+theme+","+theme+")";
	}
}
document.getElementById("darkness").onchange = function(){
	if(localStorage.getItem("Theme") != darkness.value){
		localStorage.setItem("Theme",darkness.value);
		ThemeApply();
	}
}
ThemeApply();
darkness.value = localStorage.getItem("Theme");
for(let i = 0; i < PatchNotes.UpdateNumbers.length;i++){
	document.getElementById("CurrentVersion").textContent = "Version: "+ PatchNotes.UpdateNumbers[i];
	document.getElementById("CurrentVersionName").textContent = PatchNotes.PatchNotesNames[i];
}
