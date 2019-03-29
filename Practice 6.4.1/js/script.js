const APIKey = '099715979800997fed902c8c415868c1';
const form = document.forms[0];
const temperature = document.querySelector('.temperature');
const windSpeed = document.querySelector('.windspeed');

form.onsubmit = function(e) {
	e.preventDefault();

	let city = form.elements.city.value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + ': ' + xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		temperature.innerHTML = 'Температура в городе: ' + (DATA.main.temp - 273).toFixed(2) + '°C';
		windSpeed.innerHTML = 'Скорость ветра в городе: ' + (DATA.wind.speed) + 'м/с';
	}

}