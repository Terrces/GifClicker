import {Alert} from "./WindowLogics/WindowLogic.js";
let PatchNotesFetch = await fetch("https://raw.githubusercontent.com/Terrces/GifClicker/main/PatchNotes.json");
let PatchNotes = await PatchNotesFetch.json();

const Version = "0.5.0";

if (PatchNotes.UpdateNumbers[PatchNotes.UpdateNumbers.length-1] != Version){
	Alert("Update error! Press Ctrl+f5 to reload the page","The update may arrive within 5 minutes or more","https://media.tenor.com/ls5KtfBxJUMAAAAi/mythikore-anime-girl.gif",99999999999999);
}