import { play, gamesCount } from '../index.js';
import ranNumber from '../rangen.js';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num === 1 || num % 2 === 0) {
    return false;
  }
  const halfnumber = (num + 1) / 2;
  let counter = 2;
  while (num % counter !== 0 && counter < halfnumber) {
    counter += 1;
  }
  return counter === halfnumber;
};

const roundsDataGenerator = () => {
  const roundsData = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    const rightAnswer = isPrime(number1) ? 'yes' : 'no';
    roundsData.push([`${number1}`, rightAnswer]);
  }
  return roundsData;
};

const brainPrime = () => {
  play(roundsDataGenerator(), 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default brainPrime;
