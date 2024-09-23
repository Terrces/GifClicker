let lang = localStorage.getItem("lang");

let TranslateFetch = await fetch("../../Data/Translate.json");
let Translate = await TranslateFetch.json();

try
{
    document.querySelector(".ButtonPlay").innerHTML = Translate[lang].menu.play;
    document.querySelector(".ButtonSettings").innerHTML = Translate[lang].menu.settings;
    document.querySelector(".ButtonCredits").innerHTML = Translate[lang].menu.credits;
    document.querySelector(".ButtonExit").innerHTML = Translate[lang].menu.exit;    
}
catch
{
    document.querySelector(".ButtonGeneral").innerHTML = Translate[lang].menu.general;
    document.querySelector(".ButtonGraphics").innerHTML = Translate[lang].menu.graphics;
    document.querySelector(".ButtonAudio").innerHTML = Translate[lang].menu.audio;
    document.querySelector(".ButtonThemes").innerHTML = Translate[lang].menu.themes;
    document.querySelector(".ButtonBack").innerHTML = Translate[lang].general.back;
    document.querySelector("#SoundsSettingsHeading").innerHTML = Translate[lang].settings.sounds_title;
    document.querySelector("#AnotherSettingsHeading").innerHTML = Translate[lang].settings.another_title;
    document.querySelector("#SoundsvolumeText").innerHTML = Translate[lang].settings.sounds_volume_text;
    document.querySelector("#LanguageText").innerHTML = Translate[lang].settings.language_text;
    document.querySelector("#Credits").innerHTML = Translate[lang].menu.credits;
}
//settings
