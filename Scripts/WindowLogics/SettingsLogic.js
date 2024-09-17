
const body = document.querySelector("body");
let button = document.querySelectorAll(".buttonimg");
const ShopProduct = document.querySelectorAll(".ProductBlock");
const darkness = document.getElementById("darkness");
body.style.backgroundImage = "url(https://images.unsplash.com/photo-1700909415807-9abe5be462cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
body.style.backgroundPositionY = 50 + "%";
body.style.backgroundPositionX = 50 + "%";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = 100 + "%";


export function ThemeApply(){
	let theme = localStorage.getItem("Theme");
	if(theme == null){
		localStorage.setItem("Theme",0);
	}
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
