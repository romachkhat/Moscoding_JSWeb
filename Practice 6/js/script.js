const APIKey = '099715979800997fed902c8c415868c1';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=' + APIKey;
const form = document.forms[0];
const personName = document.querySelector('.personName');
const icon = document.querySelector('.icon');

class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return ++this.happiness;
	}
	hasRest() {
		return ++this.happiness;
	}
	hasMoney() {
		return ++this.happiness;
	}
	isSunny() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();

		if (xhr.status != 200) {
			console.log('STATUS ' + xhr.status + ': ' + xhr.statusText);
		} else {
			var DATA = JSON.parse(xhr.responseText);
		}

		return (DATA.main.temp - 273) > 15 ? ++this.happiness : this.happiness;
	}
}

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const name = form.elements.name.value;
	const cat = form.elements.cat.value;
	const rest = form.elements.rest.value;
	const money = form.elements.money.value;

	const person = new Person(name);
	console.log(person);

	if (cat == 'yes') {person.hasCat()};
	if (rest == 'yes') {person.hasRest()};
	if (money == 'yes') {person.hasMoney()};
	person.isSunny();

	let emoji;
	switch (person.happiness) {
		case 4:
			emoji = '😁';
			break;
		case 3:
			emoji = '😐';
			break;
		case 2:
			emoji = '😐';
			break;
		case 1:
			emoji = '☹️';
			break;
		default:
			emoji = '🖤';
			break;
	}

	console.log(person.happiness);

	personName.innerHTML = name;
	icon.innerHTML = emoji;
})