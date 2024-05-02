//import {Search} from "../WindowLogics/ShopLogic.js"

// import { InputSearch } from "../Variables";

//const InputSearch = document.querySelector(".Search");

if(localStorage.getItem("SearchImage") == null || localStorage.getItem("SearchImage")==""){
    localStorage.setItem("SearchImage","anime hello");
}

function httpGetAsync(theUrl, callback)
{
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}
// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext)
{
    var response_objects = JSON.parse(responsetext);

    let gifs = response_objects["results"];
    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (gif)
    if(document.querySelector(".stickers") != null && document.querySelector(".stickers").checked == true){
    	Main.src=gifs[10]["media_formats"]["gif_transparent"]["url"];
    }else{
        Main.src=gifs[10]["media_formats"]["gif"]["url"];
    }
    return;
}
export function nextImage()
{
    var search_term = "anime hello";
    var InputSearch = localStorage.getItem("SearchImage");

    if(localStorage.getItem("SearchImage") == ""){
        localStorage.setItem("SearchImage","anime hello");
    }

    search_term = InputSearch;

    // set the apikey and limit
    var apikey = "AIzaSyBPCEe-KyjlWdroCAE0fFvS5Yxbrk6YhJ0";
    var clientkey = "RandomImage";

    //using default locale of en_US
    if(document.querySelector(".stickers") != null && document.querySelector(".stickers").checked == true){
        var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&locale=ru_RU" +  "&key=" + apikey +"&client_key=" + clientkey + "&random=true"+"&searchfilter=sticker";
    }
	else{
        var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&locale=ru_RU" +  "&key=" + apikey +"&client_key=" + clientkey + "&random=true";
    	
    }
    httpGetAsync(search_url,tenorCallback_search);
    return;
}