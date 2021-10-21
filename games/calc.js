/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play } from '../src/index.js';

console.log('What is the result of the expression?');
const expression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = ranNumber(1, 100);
    const number2 = ranNumber(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let rightOut = '';
    switch (operator) {
      case '+':
        rightOut = number1 + number2;
        break;
      case '-':
        rightOut = number1 - number2;
        break;
      default:
        rightOut = number1 * number2;
        break;
    }
    result.push([`${number1} ${operator} ${number2}`, rightOut.toString()]);
  }
  return result;
};// return 3 pairs of answer-expression
const brainCalc = () => {
  play(expression());
};
export default brainCalc;
