var togglebtn = document.getElementById("ToggleMenuBtn");
var menu = document.getElementById("SideBar");
var content = document.getElementById("content");
let bool = true;

function TOGGLE() {
  if (bool) {
    content.style.width = "100%";
    menu.style.opacity = 0;
    menu.style.width = "0%";
    content.style.transition = "all 0.2s";
    menu.style.transition = "all 0.2s";
  } else {
    content.style.width = "88%";
    menu.style.opacity = 1;
    menu.style.width = "10%";
    content.style.transition = "all 0.2s";
    menu.style.transition = "all 0.2s";
  }
  bool = !bool; // Toggle the state
}

togglebtn.addEventListener("click", TOGGLE);
