let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
];

for (let n of names) {
	for (let i of n) {
    		i.forEach(function(element) {
    			console.log(element);
    		});
		};
}

