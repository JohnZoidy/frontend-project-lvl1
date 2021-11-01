import { play, gamesCount } from '../index.js';
import ranNumber from '../rangen.js';

const gcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    return gcd(number1, number2);
  }
  return (number1 + number2).toString();
};

const roundsDataGenerator = () => {
  const roundsData = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const number1 = ranNumber(1, 100);
    const number2 = ranNumber(1, 100);
    roundsData.push([`${number1} ${number2}`, gcd(number1, number2)]);
  }
  return roundsData;
};

const brainGcd = () => {
  play(roundsDataGenerator(), 'Find the greatest common divisor of given numbers.');
};
export default brainGcd;
