/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';

const gcd = (num1, num2) => {
  if (num1 > num2 && num1 % num2 !== 0) {
    return gcd(num2, num1 % num2);
  }
  if (num2 > num1 && num2 % num1 !== 0) {
    return gcd(num1, num2 % num1);
  }
  if (num1 % num2 === 0) {
    return num2.toString();
  }
  return num1.toString();
  /*
  let smaller = num1;
  if (num1 > num2) {
    smaller = num2;
  }
  while (num1 % smaller !== 0 || num2 % smaller !== 0) {
    smaller -= 1;
  }
  return smaller.toString();
  */
};

const expression = () => {
  const result = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    const number2 = ranNumber(1, 100);
    result.push([`${number1} ${number2}`, gcd(number1, number2)]);
  }
  return result;
};

const brainGcd = () => {
  play(expression(), 'Find the greatest common divisor of given numbers.');
};
export default brainGcd;
