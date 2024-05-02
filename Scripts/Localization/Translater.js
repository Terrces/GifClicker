import {ru_RU,en_US} from "./Translate.js";
import {ThemeApply} from "../WindowLogics/SettingsLogic.js";
let LanguageChoiser = document.querySelector("#LanguageChoise");
let Lang = localStorage.getItem("lang");
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang",LanguageChoiser.value);
}
LanguageChoiser.value = localStorage.getItem("lang");
function localizator(){
    if(Lang == "en_US"){
        document.querySelector("#BuyGifRefresh").innerHTML = '<img class="buttonimg" src="./Pictures/Icons/update.svg" style="height:1em;"> ' + en_US[0];
        document.querySelector("#AppendInCollection").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/bookmark.svg" style="height:1em;"> ' + en_US[1];
        document.querySelector("#CollectionOpen").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/collection.svg" style="height:1em;">' + en_US[2];
        document.querySelector("#OpenShopWindow").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/shop.svg" style="height:1.2em; margin-bottom:-3px;">' + en_US[3];
        document.querySelector("#ThemesSettingsHeading").innerHTML = en_US[4];
        document.querySelector("#SoundsSettingsHeading").innerHTML = en_US[5];
        document.querySelector("#AnotherSettingsHeading").innerHTML = en_US[6];
    }
    else if(Lang == "ru_RU"){
        document.querySelector("#BuyGifRefresh").innerHTML = '<img class="buttonimg" src="./Pictures/Icons/update.svg" style="height:1em;"> ' + ru_RU[0];
        document.querySelector("#AppendInCollection").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/bookmark.svg" style="height:1em;"> ' + ru_RU[1];
        document.querySelector("#CollectionOpen").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/collection.svg" style="height:1em;">' + ru_RU[2];
        document.querySelector("#OpenShopWindow").innerHTML =  '<img class="buttonimg" src="./Pictures/Icons/shop.svg" style="height:1.2em;  margin-bottom:-3px;">' + ru_RU[3];
        document.querySelector("#ThemesSettingsHeading").innerHTML = ru_RU[4];
        document.querySelector("#SoundsSettingsHeading").innerHTML = ru_RU[5];
        document.querySelector("#AnotherSettingsHeading").innerHTML = ru_RU[6];
        document.querySelector("#FoggingText").innerHTML = "Затемнение";
        document.querySelector("#SoundsvolumeText").innerHTML = "Громкость";
        document.querySelector("#LanguageText").innerHTML = "Язык:";
    }
    ThemeApply();
}
localizator();
LanguageChoiser.onchange = function(){
    localStorage.setItem("lang",LanguageChoiser.value);
    localizator();
    location.reload();
}