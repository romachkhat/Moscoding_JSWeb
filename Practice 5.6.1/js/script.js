const form = document.forms.sinus;
const insert = document.querySelector(".sin");

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = Math.sin(form.elements.number.value);
}