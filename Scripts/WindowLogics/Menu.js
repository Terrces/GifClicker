let windowOuterWidth = window.outerWidth
let UI = document.querySelector(".UI");
UI.style.borderRadius = "0px";
UI.style.left = "0px";
UI.style.right = "0px";
UI.style.width = "100%";
UI.style.maxWidth = "1000vw";
window.addEventListener('resize',() => {
    location.reload();
    if(windowOuterWidth <= 800){
        document.querySelector(".CurrentBuild").textContent = "current version:" + PatchNotes.UpdateNumbers[i];
        let latestbuild = document.querySelector(".LatestBuild");
        latestbuild.style.fontSize = "1.4vh";
        latestbuild.style.backgroundColor = "transparent";
        latestbuild.style.bottom = "0px";
        latestbuild.style.color = "white";
    }
})


let PatchNotesFetch = await fetch("../../Data/PatchNotes.json");
let PatchNotes = await PatchNotesFetch.json()
document.querySelector(".LatestBuild").addEventListener("click", () => {window.location.href='./PatchNotes.html'})
for(let i = 0; i < PatchNotes.UpdateNumbers.length;i++){
    if(windowOuterWidth <= 900){
        document.querySelector(".CurrentBuild").textContent = "current version:" + PatchNotes.UpdateNumbers[i];
        let latestbuild = document.querySelector(".LatestBuild");
        let UI = document.querySelector(".UI");
        latestbuild.style.fontSize = "1.4vh";
        latestbuild.style.backgroundColor = "transparent";
        latestbuild.style.bottom = "0px";
        latestbuild.style.border = "0px solid transparent";
        latestbuild.style.color = "white";
    }
    else
    {
        document.querySelector(".CurrentBuild").textContent = "v" + PatchNotes.UpdateNumbers[i];
        document.querySelector(".CurrentBuildName").textContent = ": " + PatchNotes.PatchNotesNames[i];
        document.querySelector(".BuildImage").src = PatchNotes.Image[i];
        document.querySelector(".changes").textContent = PatchNotes.Changes[i];
        document.querySelector(".Date").textContent = "Updated: " + PatchNotes.Date[i];
    }
    if(PatchNotes.Date[i] == "Creating"){
        document.querySelector(".ButtonDevMenu").style.display = "block";
    }
    else
    {
        document.querySelector(".ButtonDevMenu").style.display = "none";
    }
}