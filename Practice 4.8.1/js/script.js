function haveEnough(money, numberOfApples, numberOfLoaves, costOfApple, costOfLeaf) {
	return (money >= (costOfApple * numberOfApples + costOfLeaf * numberOfLoaves) ? "Вам хватает денег на покупки" : "Вам не хватает денег");
}

let money = parseInt(prompt("Сколько у вас с собой денег?"));
let numberOfApples = parseInt(prompt("Сколько вы купили яблок?"));
let numberOfLoaves = parseInt(prompt("Сколько вы купили батонов хлеба?"));
let costOfApple = parseFloat(prompt("Сколько стоит одно яблоко?"));
let costOfLeaf = parseFloat(prompt("Сколько стоит один батон хлеба?"));

console.log(haveEnough(money, numberOfApples, numberOfLoaves, costOfApple, costOfLeaf));