import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isPrime = (num) => {
  if (num === 1 || num % 2 === 0) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const halfnumber = num / 2;
  for (let i = 2; i < halfnumber; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const roundsDataGenerator = () => {
  const roundsData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const rightAnswer = isPrime(number1) ? 'yes' : 'no';
    roundsData.push([`${number1}`, rightAnswer]);
  }
  return roundsData;
};

const brainPrime = () => {
  play(roundsDataGenerator(), 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default brainPrime;
