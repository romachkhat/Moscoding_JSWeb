const numbers = document.querySelector("span");

for (let i = 1; i <= 100000; i++) {
	if (i % 6 == 0) {
		numbers.innerHTML = numbers.innerHTML + " " + i;
	}
}