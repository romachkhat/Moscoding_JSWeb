var requestButton = document.querySelector(".request");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".closePopup");
var openMenu = document.querySelector(".openMenu");
var menu = document.querySelector(".menu");
var closeMenu = document.querySelector(".closeMenu");
var overlay = document.querySelector(".overlay");

requestButton.addEventListener("click", function() {
	overlay.style.display = "block";
	popup.style.display = "flex";
});

closePopup.onclick = function() {
	overlay.style.display = "none";
	popup.style.display = "none";
};

overlay.onclick = function() {
	overlay.style.display = "none";
	popup.style.display = "none";
}

openMenu.onclick = () => {
	menu.style.left = "0";
};

closeMenu.onclick = () => {
	menu.style.left = "-50vw";
};