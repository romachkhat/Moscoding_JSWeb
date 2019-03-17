let money = parseInt(prompt("Сколько у вас с собой денег?"));
let numberOfApples = parseInt(prompt("Сколько вы купили яблок?"));
let numberOfLoaves = parseInt(prompt("Сколько вы купили батонов хлеба?"));
let costOfApples = parseFloat(prompt("Сколько стоит одно яблоко?")) * numberOfApples;
let costOfLoaves = parseFloat(prompt("Сколько стоит один батон хлеба?")) * numberOfLoaves;
document.body.innerHTML = money >= (costOfApples + costOfLoaves);