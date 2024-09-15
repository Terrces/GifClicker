import {ThemeApply} from "../WindowLogics/SettingsLogic.js";
let TranslateFetch = await fetch("../../Data/Translate.json");
let Translate = await TranslateFetch.json()

export {Translate}

let LanguageChoiser = document.querySelector("#LanguageChoise");
let Lang = localStorage.getItem("lang");
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang",LanguageChoiser.value);
}
LanguageChoiser.value = localStorage.getItem("lang");
function localizator(){
    document.querySelector("#BuyGifRefresh").innerHTML = '<img class="buttonimg" src="../Pictures/Icons/update.svg" style="height:1em;"> ' + Translate[Lang].main.refresh;
    document.querySelector("#AppendInCollection").innerHTML =  '<img class="buttonimg" src="../Pictures/Icons/bookmark.svg" style="height:1em;"> ' + Translate[Lang].main.add_gif_to_collection;
    document.querySelector("#CollectionOpen").innerHTML =  '<img class="buttonimg" src="../Pictures/Icons/collection.svg" style="height:1em;">' + Translate[Lang].main.collection;
    document.querySelector("#OpenShopWindow").innerHTML =  '<img class="buttonimg" src="../Pictures/Icons/shop.svg" style="height:1.2em; margin-bottom:-3px;">' + Translate[Lang].main.shop;
    document.querySelector("#ThemesSettingsHeading").innerHTML = Translate[Lang].settings.theme_title;
    document.querySelector("#SoundsSettingsHeading").innerHTML = Translate[Lang].settings.sounds_title;
    document.querySelector("#AnotherSettingsHeading").innerHTML = Translate[Lang].settings.another_title;
    document.querySelector("#FoggingText").innerHTML = Translate[Lang].settings.main_accent_color_text;
    document.querySelector("#SoundsvolumeText").innerHTML = Translate[Lang].settings.sounds_volume_text;
    document.querySelector("#LanguageText").innerHTML = Translate[Lang].settings.language_text;

    ThemeApply();
}
localizator();
LanguageChoiser.onchange = function(){
    localStorage.setItem("lang",LanguageChoiser.value);
    localizator();
    location.reload();
}