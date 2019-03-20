var requestButton = document.querySelector(".request");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".closePopup");
var openMenu = document.querySelector(".openMenu");
var menu = document.querySelector(".menu");
var closeMenu = document.querySelector(".closeMenu");

requestButton.addEventListener("click", function() {
	popup.style.display = "flex";
  popup.style.opacity = "1";
});

closePopup.onclick = function() {
  popup.style.display = "none";
  popup.style.opacity = "0";
};

openMenu.onclick = () => {
	menu.style.left = "0";
};

closeMenu.onclick = () => {
	menu.style.left = "-50vw";
};