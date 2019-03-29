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

for (n of names) {
	for (i of n) {
    		i.forEach(function(element) {
    			console.log(element);
    		});
		};
}

