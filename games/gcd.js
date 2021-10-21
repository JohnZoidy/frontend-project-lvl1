/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');
const gcd = (num1, num2) => {
  let smaller = num1;
  if (num1 > num2) {
    smaller = num2;
  }
  while (num1 % smaller !== 0 || num2 % smaller !== 0) {
    smaller -= 1;
  }
  return smaller.toString();
}; // find gcd
const expression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = ranNumber(1, 100);
    const number2 = ranNumber(1, 100);
    result.push([`${number1} ${number2}`, gcd(number1, number2)]);
  }
  return result;
};// return 3 pairs of answer-expression
const brainGcd = () => {
  play(expression());
};
export default brainGcd;
