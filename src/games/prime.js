/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';
import { Greetings } from '../cli.js';

const isPrime = (num1) => {
  let counter = num1 - 1;
  while (num1 % counter !== 0) {
    counter -= 1;
  }
  if (counter === 1) {
    return 'yes';
  }
  return 'no';
}; // cheking for prime and return yes/no
const expression = () => {
  const result = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    result.push([`${number1}`, isPrime(number1)]);
  }
  return result;
};// return 3 pairs of answer-expression
const brainPrime = () => {
  Greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  play(expression());
};
export default brainPrime;
