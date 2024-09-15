import GifLibrary from "./clicker.js";
import {ThemeApply} from "./SettingsLogic.js";
let TranslateFetch = await fetch("../Data/Translate.json");
let Translate = await TranslateFetch.json()

export function GifsInLibraryCreate(){
	for(let i=0; i < GifLibrary.length; i++){
		setTimeout(() => {
			document.getElementById("AllGifsContainer").style.transform = "scale(1, 1)";
			//document.getElementById("AllGifsContainer").style.opacity = 1;
		},200)
		
		const librarybase = document.querySelector(".allgifs");
		const CreateBlock= document.createElement('div');
		const CreateGif= document.createElement('img');
		const giflink = document.createElement('text');
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

		CopyLinkbutton.textContent = Translate[Lang].Collection.copy_GIF;
		choisebutton.textContent = Translate[Lang].Collection.choise;
		removebutton.textContent = Translate[Lang].Collection.delete;

		CopyLinkbutton.prepend(copyIcon);
		choisebutton.prepend(choiseIcon);
		removebutton.prepend(deleteIcon);
		
		ThemeApply();
		CopyLinkbutton.onclick = function(){
			let tempInput = document.createElement("input");
			tempInput.value = CreateGif.src;
			document.body.appendChild(tempInput);
			tempInput.select();
			document.execCommand("copy");
			document.body.removeChild(tempInput);
			var sound = new Audio();
			sound.volume = document.getElementById('ChangeSystemSound').value;
			sound.src = 'Audio/Sounds/Copy.mp3';
			sound.play().catch(()=>{});
		}
		choisebutton.onclick = function(){
			Main.src = GifLibrary[choisebutton.id]
			var sound = new Audio();
			sound.volume = document.getElementById('ChangeSystemSound').value;
			sound.src = 'Audio/Sounds/Choise.mp3';
			sound.play().catch(()=>{});
		}
		removebutton.onclick = function()
		{
			document.getElementById("AllGifsContainer").style.transform = "scale(0.9,0.9)";
			//document.getElementById("AllGifsContainer").style.opacity = 0;
			DeleteById("DeleteThis");
			GifLibrary.splice(removebutton.id,1);
			localStorage.setItem('GifCollection',JSON.stringify(GifLibrary));
			GifsInLibraryCreate();
			var sound = new Audio();
			sound.volume = document.getElementById('ChangeSystemSound').value;
			sound.src = 'Audio/Sounds/Delete.mp3';
			sound.play().catch(()=>{});
		}
		choisebutton.className = "ChoiseThisGif";
		removebutton.className = "DeleteThisGif";

		librarybase.prepend(CreateBlock);
		CreateBlock.append(CreateGif,CopyLinkbutton,choisebutton,removebutton);

		CreateGif.src = giflink.textContent=GifLibrary[i];
		CopyLinkbutton.id = removebutton.id = choisebutton.id = CreateGif.id = i;
		ThemeApply();
	}
}
export function DeleteById(id){
	for(let i=0;i < GifLibrary.length; i++){
		document.getElementById(id).remove();
	}
}