/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';

const rightOut = (num1, num2, opr) => {
  switch (opr) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

const expression = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    const number2 = ranNumber(1, 100);
    const operator = operators[ranNumber(0, operators.length)];
    result.push([`${number1} ${operator} ${number2}`, rightOut(number1, number2, operator).toString()]);
  }
  return result;
};

const brainCalc = () => {
  play(expression(), 'What is the result of the expression?');
};
export default brainCalc;
