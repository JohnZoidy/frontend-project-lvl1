import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    return getGCD(number1, number2);
  }
  return (number1 + number2);
};

const generateData = () => {
  const roundsData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    roundsData.push([`${number1} ${number2}`, getGCD(number1, number2).toString()]);
  }
  return roundsData;
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  play(generateData(), rules);
};
export default brainGcd;
