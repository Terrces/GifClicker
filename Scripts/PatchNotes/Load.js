
let PatchNotesFetch = await fetch("https://raw.githubusercontent.com/Terrces/GifClicker/main/PatchNotes.json");
let PatchNotes = await PatchNotesFetch.json()

let GameInfoFetch = await fetch("https://raw.githubusercontent.com/Terrces/GifClicker/main/GameInfo.json");
let GameInfo = await GameInfoFetch.json();

document.querySelector("body").style.backgroundColor = "rgb(" + localStorage.getItem("Theme") + "," + localStorage.getItem("Theme") + "," + localStorage.getItem("Theme") + "," + localStorage.getItem("Theme")  + ")";

if(localStorage.getItem("Theme") >= 120){
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "White";
}
else{
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
}

// console.log(Changelog.Changes[0]);
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
    Container.style.cssText = "display:flex; flex-direction:column;margin:0.8em;padding:0.8em;background:white;color:black;border-radius:0.9em; align-items:center;";

    Container.style.backgroundImage = "url(" + PatchNotes.Image[i] + ")";
    Container.style.backgroundPosition = "left";
    Container.style.backgroundRepeat = "no-repeat";
    Container.style.backgroundSize = "12%";
    Container.style.backgroundBlendMode = "multiply";
    MiniTitle.textContent = "Изменения - Обновления";
    name.textContent = "Обновление: " + PatchNotes.UpdateNumbers[i] + PatchNotes.PatchNotesNames[i];
    changes.textContent = PatchNotes.Changes[i];
    date.textContent = "Дата обновления: " + PatchNotes.Date[i];
    document.getElementById("PatchNotesContainer").prepend(Container);
    Container.append(name,MiniTitle,changes,updatenumber,date);
}