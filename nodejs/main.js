console.log('Before require');
const math = require('./math.js');
console.log('After require');

console.log('Square is: ' + math.square(3));
console.log('Var1: ' + math.var1);
