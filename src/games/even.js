import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const roundsDataGenerator = () => {
  const roundsData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = generateRandomNumber(1, 100);
    const rightOut = isEven(number) ? 'yes' : 'no';
    roundsData.push([number, rightOut]);
  }
  return roundsData;
};

const brainEven = () => {
  play(roundsDataGenerator(), 'Answer "yes" if the number is even, otherwise answer "no"');
};
export default brainEven;
