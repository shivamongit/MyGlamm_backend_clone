import {header, footer} from "./components/heading.js";
let top = document.getElementById("top");
top.innerHTML = header(); 
console.log(header());
let bottom = document.getElementById("bottom");
bottom.innerHTML = footer();

let refer_earnBtn = document.getElementById("refer-earnBtn");
refer_earnBtn.addEventListener("click", ()=>{
window.open("signup.html")
})