let FirstStartSearch = "Anime Dance";

if(localStorage.getItem("SearchImage") == null){
    localStorage.setItem("SearchImage",JSON.stringify([FirstStartSearch,"sticker"]));
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

    let temparray = JSON.parse(localStorage.getItem("SearchImage"))

    if(temparray != null && temparray[1] == "sticker"){
    	Main.src=gifs[10]["media_formats"]["gif_transparent"]["url"];
    }else{
        Main.src=gifs[10]["media_formats"]["gif"]["url"];
    }
    return;
}
export function nextImage(search = "")
{
    function StorageSave()
    {
        localStorage.setItem("SearchImage",JSON.stringify(search_term));
    }

    var search_term = [FirstStartSearch,"sticker"];
    var InputSearch = JSON.parse(localStorage.getItem("SearchImage"));

    search_term = InputSearch;
    if(search != null && search.trim() != "")
    {
        search_term[0] = search
        StorageSave();
    }

    //Сохранение данных о том является ли гифка стикром иначе пустота что значит что гифка это гифка жесть да
    if(document.querySelector(".stickers") != null)
    {
        document.querySelector(".stickers").addEventListener("click", () => {
            if(document.querySelector(".stickers").checked == true)
            {
                search_term[1] = "sticker"
                StorageSave();
            }
            else
            {
                search_term[1] = ""
                StorageSave();
            }
        })
    }



    // set the apikey and limit
    var apikey = "AIzaSyBPCEe-KyjlWdroCAE0fFvS5Yxbrk6YhJ0";
    var clientkey = "RandomImage";

    //using default locale of en_US

    var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term[0] + "&locale=en_US" +  "&key=" + apikey +"&client_key=" + clientkey + "&random=true"+"&searchfilter="+search_term[1];
    
    httpGetAsync(search_url,tenorCallback_search);
    return;
}