
let TranslateFetch = await fetch("/Data/Translate.json");
let Translate = await TranslateFetch.json()

let PatchNotesFetch = await fetch("/Data/PatchNotes.json");
let PatchNotes = await PatchNotesFetch.json()

let GameInfoFetch = await fetch("/Data/GameInfo.json");
let GameInfo = await GameInfoFetch.json();

let Lang = localStorage.getItem("lang");

console.log(PatchNotes.Changes[0]);
for(let i = 0; i < PatchNotes.UpdateNumbers.length;i++){
    let Container = document.createElement("div");
    let name = document.createElement("text");
    let MiniTitle = document.createElement("text");
    let changes = document.createElement("text");
    let updatenumber = document.createElement("text");
    let date = document.createElement("text");
    name.style.cssText = "background-color:rgba(189, 252, 169,0.7);border-radius:0.8em; margin-bottom:0.4em;padding:0.5em;font-size:1.8em;";

    MiniTitle.style.marginBottom = "0.2em"
    changes.style.cssText = "background-color:rgba(255, 237, 133,0.2);border-radius:1em;padding:0.5em;margin-bottom:0.2em;font-size:1.2em; max-width:80%; backdrop-filter:blur(5px) saturate(5%);";
    Container.style.cssText = "display:flex; flex-direction:column;margin:0.8em;padding:0.8em;background:rgba(255,255,255,0.6);color:black;border-radius:0.9em; align-items:center;";

    Container.style.backgroundImage = "url(" + PatchNotes.Image[i] + ")";
    Container.style.backgroundPosition = "left";
    Container.style.backgroundRepeat = "no-repeat";
    Container.style.backgroundSize = "12%";
    Container.style.backgroundBlendMode = "multiply";
    MiniTitle.textContent = Translate[Lang].patch_notes.mini_title;
    name.textContent = Translate[Lang].patch_notes.title + PatchNotes.UpdateNumbers[i] + PatchNotes.PatchNotesNames[i];
    changes.textContent = PatchNotes.Changes[i];
    date.textContent = Translate[Lang].patch_notes.updated + PatchNotes.Date[i];
    document.getElementById("PatchNotesContainer").prepend(Container);
    Container.append(name,MiniTitle,changes,updatenumber,date);
}