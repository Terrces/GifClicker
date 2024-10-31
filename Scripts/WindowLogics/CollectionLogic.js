import GifLibrary from "./Clicker.js";
let TranslateFetch = await fetch("../Data/Translate.json");
let Translate = await TranslateFetch.json()

export function GifsInLibraryCreate(){
	for(let i=0; i < GifLibrary.length; i++){
		setTimeout(() => {
			document.getElementById("AllGifsContainer").style.transform = "scale(1, 1)";
			document.getElementById("AllGifsContainer").style.opacity = 1;
		},200)
		
		const librarybase = document.querySelector(".allgifs");
		const CreateBlock= document.createElement('div');
		const choisebutton = document.createElement('button');
		const removebutton = document.createElement('button');
		const CopyLinkbutton = document.createElement('button');
		const copyIcon = document.createElement("img");
		const choiseIcon = document.createElement("img");
		const deleteIcon = document.createElement("img");

		copyIcon.className = "buttonimg";
		copyIcon.src = "../Pictures/Icons/copy.svg";
		copyIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		choiseIcon.className = "buttonimg";
		choiseIcon.src = "../Pictures/Icons/select.svg";
		choiseIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		deleteIcon.className = "buttonimg";
		deleteIcon.src = "../Pictures/Icons/trash.svg";
		deleteIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		CreateBlock.className = "CollectionGif";
		CreateBlock.id = "DeleteThis";
		
		let Lang = localStorage.getItem("lang");

		CopyLinkbutton.textContent = Translate[Lang].collection.copy_GIF;
		choisebutton.textContent = Translate[Lang].collection.choise;
		removebutton.textContent = Translate[Lang].collection.delete;
		choisebutton.style.opacity = "0";removebutton.style.opacity = "0";CopyLinkbutton.style.opacity = "0";
		choisebutton.style.transition = "0.3s ease-in-out";removebutton.style.transition = "0.2s ease-in-out";CopyLinkbutton.style.transition = "0.4s ease-in-out";
		CopyLinkbutton.prepend(copyIcon);
		choisebutton.prepend(choiseIcon);
		removebutton.prepend(deleteIcon);
		
		function CopyLink ()
		{
			let tempInput = document.createElement("input");
			tempInput.value = GifLibrary[CopyLinkbutton.id];
			document.body.appendChild(tempInput);
			tempInput.select();
			document.execCommand("copy");
			document.body.removeChild(tempInput);
			let sound = new Audio();
			sound.volume = localStorage.getItem("volume");
			sound.src = '../Audio/Sounds/Copy.mp3';
			sound.play().catch(()=>{});
		}

		CreateBlock.addEventListener("mouseenter", (event) => 
		{
			removebutton.style.opacity = "1";
			choisebutton.style.opacity = "1";
			CopyLinkbutton.style.opacity = "1";
			removebutton.style.transform = "scale(1,1)";
			choisebutton.style.transform = "scale(1,1)";
			CopyLinkbutton.style.transform = "scale(1,1)";
		})
		CreateBlock.addEventListener("mouseleave", (event) => 
			{
				removebutton.style.opacity = "0";
				choisebutton.style.opacity = "0";
				CopyLinkbutton.style.opacity = "0";
				removebutton.style.transform = "scale(0,0)";
				choisebutton.style.transform = "scale(0,0)";
				CopyLinkbutton.style.transform = "scale(0,0)";
			})
		CopyLinkbutton.onclick = function(){CopyLink();}
		choisebutton.onclick = function(){
			Main.src = GifLibrary[choisebutton.id]
			var sound = new Audio();
			sound.volume = localStorage.getItem("volume");
			sound.src = '/Audio/Sounds/Choise.mp3';
			sound.play().catch(()=>{});
		}
		removebutton.onclick = function()
		{
			document.getElementById("AllGifsContainer").style.transform = "scale(0.95,0.95)";
			document.getElementById("AllGifsContainer").style.opacity = 0;
			DeleteById("DeleteThis");
			GifLibrary.splice(removebutton.id,1);
			localStorage.setItem('GifCollection',JSON.stringify(GifLibrary));
			GifsInLibraryCreate();
			var sound = new Audio();
			sound.volume = localStorage.getItem("volume");
			sound.src = '/Audio/Sounds/Delete.mp3';
			sound.play().catch(()=>{});
		}
		choisebutton.className = "ChoiseThisGif";
		removebutton.className = "DeleteThisGif";

		librarybase.prepend(CreateBlock);
		CreateBlock.append(CopyLinkbutton,choisebutton,removebutton);
		CreateBlock.style.backgroundImage = "url(" + GifLibrary[i] + ")"

		CopyLinkbutton.id = removebutton.id = choisebutton.id = i;
	}
}
export function DeleteById(id){
	for(let i=0;i < GifLibrary.length; i++){
		document.getElementById(id).remove();
	}
}