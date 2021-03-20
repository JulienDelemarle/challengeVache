const nodeChallenge = require('./information.js');
console.log(nodeChallenge);


const cowsay = require('cowsay');

console.log(cowsay.say({
	text : `Hello, I'm ${nodeChallenge.name} from ${nodeChallenge.campus} campus!`,
	e : "oO",
	T : "U "
}));









