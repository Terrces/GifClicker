import GifLibrary from "../script.js";
import {ThemeApply} from "./SettingsLogic.js";
export function GifsInLibraryCreate(){
	for(let i=0;i < GifLibrary.length;i++){

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
		copyIcon.src = "Pictures/Icons/copy.svg";
		copyIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		choiseIcon.className = "buttonimg";
		choiseIcon.src = "Pictures/Icons/select.svg";
		choiseIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		deleteIcon.className = "buttonimg";
		deleteIcon.src = "Pictures/Icons/trash.svg";
		deleteIcon.style.cssText = "height:1.2em; margin:0px 0px -3px 0px;";

		CreateBlock.className = "CollectionGif";
		CreateBlock.id = "DeleteThis";

		CopyLinkbutton.textContent = "Copy GIF";
		choisebutton.textContent = "Choise";
		removebutton.textContent = "Delete";

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
		}
		choisebutton.onclick = function(){Main.src = GifLibrary[choisebutton.id]}
		removebutton.onclick = function()
		{
			DeleteById("DeleteThis");
			//console.log(GifLibrary);
			GifLibrary.splice(removebutton.id,1);
			localStorage.setItem('GifCollection',JSON.stringify(GifLibrary));
			GifsInLibraryCreate();
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
	for(let i=0;i < GifLibrary.length;i++){
		document.getElementById(id).remove();
}}