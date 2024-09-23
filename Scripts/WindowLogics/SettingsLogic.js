let LanguageChoiser = document.querySelector("#LanguageChoise");
LanguageChoiser.value = localStorage.getItem("lang");
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang",LanguageChoiser.value);
}
LanguageChoiser.onchange = function(){
    localStorage.setItem("lang",LanguageChoiser.value);
    location.reload();
}