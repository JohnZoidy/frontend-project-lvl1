/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';

const isPrime = (num1) => {
  if (num1 % 2 === 0) {
    return false;
  }
  if (num1 === 1) {
    return true;
  }
  let counter = (num1 - 1) / 2;
  while (num1 % counter !== 0) {
    counter -= 1;
  }
  return counter === 1;
};

const expression = () => {
  const result = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    const rightAnswer = isPrime(number1) ? 'yes' : 'no';
    result.push([`${number1}`, rightAnswer]);
  }
  return result;
};

const brainPrime = () => {
  play(expression(), 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default brainPrime;
