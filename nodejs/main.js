console.log('Before require');

const math = require('./math.js');
const devJokes = require('awesome-dev-jokes');

console.log('After require');

console.log('Square is: ' + math.square(3));
console.log('Var1: ' + math.var1);

console.log('Joke: ' + devJokes.getRandomJoke());
