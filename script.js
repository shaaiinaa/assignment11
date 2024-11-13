const abc = document.getElementById("circle");
const menuBar = document.getElementById("menu-container");
let isMenu = false;
document.body.addEventListener("click", (e) => {
  if (e.target.className == "ab") {
    menubar.style.display = "flex";
    isMenu = true;
  }
  if (isMenu) {
    menuBar.style.display = "none";
    isMenu = false;
  } else if (e.target === abc) {
    menuBar.style.display = "flex";
    isMenu = true;
  }
});
