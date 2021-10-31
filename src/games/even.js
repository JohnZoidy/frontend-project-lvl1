/* eslint no-console: "off", import/extensions: "off" */
import { ranNumber, play, gamesCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const expression = () => {
  const result = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number = ranNumber(1, 100);
    const rightOut = isEven(number) ? 'yes' : 'no';
    result.push([number, rightOut]);
  }
  return result;
};

const brainEven = () => {
  play(expression(), 'Answer "yes" if the number is even, otherwise answer "no"');
};
export default brainEven;
