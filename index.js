let el_up = document.getElementById("GFG_UP");
let el_down = document.getElementById("GFG_DOWN");
let str = "Click on button to change the background color";
    
el_up.innerHTML = str;
    
function changeColor(color) {
  document.body.style.background = color;
}

function gfg_Run() {
  changeColor('pink');
  el_down.innerHTML = "Background Color changed";
}