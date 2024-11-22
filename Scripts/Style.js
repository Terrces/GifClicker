document.addEventListener("DOMContentLoaded", () => 
{
    document.body.style.opacity = "100%";
})

async function updatesize ()
{
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
}
updatesize ();
window.addEventListener('resize',() => {
    updatesize ();
})
