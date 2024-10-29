let TranslateFetch = await fetch("/Data/Translate.json");
let Translate = await TranslateFetch.json();

let Lang = localStorage.getItem("lang");
function localizator(){
        // document.querySelector(".ButtonBack").innerHTML = Translate[lang].general.back;
        document.querySelector("#BuyGifRefresh").innerHTML ='<img class="buttonimg" src="../Pictures/Icons/update.svg" style="height:1em;">' + "<text>" + Translate[Lang].main.refresh + "</text>";
        document.querySelector("#AppendInCollection").innerHTML ='<img class="buttonimg" src="../Pictures/Icons/bookmark.svg" style="height:1em;">';
        document.querySelector("#CollectionOpen").innerHTML ='<img class="buttonimg" src="../Pictures/Icons/collection.svg" style="height:1em;">' + "<text>" + Translate[Lang].main.collection  + "</text>";
        document.querySelector("#OpenShopWindow").innerHTML ='<img class="buttonimg" src="../Pictures/Icons/shop.svg" style="height:1.2em; margin-bottom:-3px;">' + "<text>" + Translate[Lang].main.shop + "</text>";

}
localizator();