let TranslateFetch = await fetch("../../../Data/Translate.json");
let Translate = await TranslateFetch.json();

let Lang = localStorage.getItem("lang");
function localizator(){
    try
    {
        document.querySelector("#BuyGifRefresh").innerHTML = document.querySelector("#BuyGifRefresh").innerHTML + Translate[Lang].main.refresh;
        document.querySelector("#CollectionOpen").innerHTML = document.querySelector("#CollectionOpen").innerHTML + Translate[Lang].main.collection;
        document.querySelector("#OpenShopWindow").innerHTML = document.querySelector("#OpenShopWindow").innerHTML + Translate[Lang].main.shop;
    }
    catch
    {
        console.log("ERROR TRANSLATE");
    }

}
localizator();
