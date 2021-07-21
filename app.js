//22. Javascript Aside: Immediately Invoked Function Expressions (IIFEs)
// console.log('22. Javascript Aside: Immediately Invoked Function Expressions (IIFEs)');
// const firstname = 'Jane';

// (function (lastname) {

// 	const firstname = 'John';
// 	console.log(firstname);
// 	console.log(lastname);
	
// }('Doe'));

// console.log(firstname);

//23. How Do Node Modules Really Work?: module.exports and require
// console.log('23. How Do Node Modules Really Work?: module.exports and require');
// const greet = require('./greet')
// greet()

//25 More require 
const greet = require('./greet/index');
greet.english();
greet.spanish();