document.body.style.opacity = "100%";

window.addEventListener('resize',() => {
    let windowOuterWidth = window.outerWidth;
    try
    {
        if(windowOuterWidth <= 650){
            document.getElementById("count").style.marginTop = "64px";
        }
        else
        {
            document.getElementById("count").style.marginTop = "15px";
        }
        
    }catch{}
})
