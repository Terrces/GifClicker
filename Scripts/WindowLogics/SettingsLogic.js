let LanguageChoiser = document.querySelector("#LanguageChoise");
let SystemAudio = document.querySelector("#ChangeSystemSound");

SystemAudio.value = localStorage.getItem("volume");

LanguageChoiser.value = localStorage.getItem("lang");
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang","en_US");
    localStorage.setItem("volume",0.05)
}
LanguageChoiser.onchange = async function(){
    localStorage.setItem("lang",LanguageChoiser.value);
    location.reload();
}
SystemAudio.onchange = async function(){
    localStorage.setItem("volume",SystemAudio.value);
}
