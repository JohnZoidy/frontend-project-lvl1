/* eslint no-console: "off", import/extensions: "off", no-unused-expressions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';
import { Greetings } from '../cli.js';

const expression = () => {
  const result = [];
  const isEven = (num) => {
    let rightOut = '';
    num % 2 === 0 ? rightOut = 'yes' : rightOut = 'no';
    return rightOut;
  };
  for (let i = 0; i < gamesCount; i += 1) {
    const number = ranNumber(1, 100);
    result.push([number, isEven(number)]);
  }
  return result;
};// return 3 pairs of answer-expression
const brainEven = () => {
  Greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  play(expression());
};
export default brainEven;
