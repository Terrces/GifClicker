import {multiply,priceAnother} from "./WindowLogics/Clicker.js";
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

export async function GifAppendCollection(){
    const gif = document.createElement("img");
    const container = document.createElement("div");
    gif.src = document.getElementById("Main").src;
    gif.style.transition = "0.6s ease-out";
    container.style.cssText = "z-index:-1;position:absolute;height:100%;width:100%;display:flex;flex-direction: column;vertical-align:middle;align-items:center;justify-content:center;";
    container.append(gif);
    document.querySelector("body").append(container);
    setTimeout(() => {gif.style.transform = "translate(250%,-100%) scale(0,0)"},0);
    setTimeout(() => {container.remove()},1100);
}