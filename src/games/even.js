import { play, gamesCount } from '../index.js';
import ranNumber from '../rangen.js';

const isEven = (num) => num % 2 === 0;

const roundsDataGenerator = () => {
  const roundsData = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number = ranNumber(1, 100);
    const rightOut = isEven(number) ? 'yes' : 'no';
    roundsData.push([number, rightOut]);
  }
  return roundsData;
};

const brainEven = () => {
  play(roundsDataGenerator(), 'Answer "yes" if the number is even, otherwise answer "no"');
};
export default brainEven;
