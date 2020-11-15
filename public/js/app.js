
var getSideMenu = document.querySelector(".semi_MENU")
var getMenuIcon = document.querySelector(".menu-icon")
var getBodyElem= document.querySelector("body")
var toToggleMode = document.querySelector(".theme_mode")

// This function trigger when menu menu icon is clicked
function menuClick(params) {
// set listener
getMenuIcon.addEventListener("click", function() {
   getSideMenu.classList.toggle("menu-trigger")
});

}
menuClick();

function themeMode() {
// Check if theme mode is set
// If the theme mode is not set it will render light theme
// Else it will render the set theme color

   var getHeadLink = document.querySelector(".theme-color")
  if(localStorage.getItem("Theme") == "undefined"){
getHeadLink.href="./public/css/theme_light.css"
}
else{
    getHeadLink.href="./public/css/theme_"+ `${localStorage.getItem("Theme")}`+".css"
 
}   

// Dark  mode  and Light mode
let themeMode =()=>{
   var getHeadLink = document.querySelector(".theme-color")
try{
   modeN = 1 - modeN
}
catch{
   modeN = 0
}
var mode = ["light" , "dark"][modeN]
localStorage.setItem("Theme", mode);
if(localStorage.getItem("Theme") == "light"){
getHeadLink.href="./public/css/theme_light.css"
}
else{
getHeadLink.href="./public/css/theme_dark.css"
}
console.log(localStorage)
}

toToggleMode.addEventListener("click",themeMode)

  if(localStorage.getItem("Theme") == "undefined"){
getHeadLink.href="./public/css/theme_light.css"
}
else{
    getHeadLink.href="./public/css/theme_"+ `${localStorage.getItem("Theme")}`+".css"
 
}   
}

themeMode()