/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');
const expression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const number = ranNumber();
    let rightOut = 'no';
    if (number % 2 === 0) {
      rightOut = 'yes';
    }
    result.push([number, rightOut]);
  }
  return result;
};// return 3 pairs of answer-expression
const brainEven = () => {
  play(expression());
};
export default brainEven;
