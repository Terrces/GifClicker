let LanguageChoiser = document.querySelector("#LanguageChoise");
LanguageChoiser.value = localStorage.getItem("lang");
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang","en_US");
    localStorage.setItem("volume",0.05)
}
LanguageChoiser.onchange = function(){
    localStorage.setItem("lang",LanguageChoiser.value);
    location.reload();
}
localStorage.setItem("volume",ChangeSystemSound.value)