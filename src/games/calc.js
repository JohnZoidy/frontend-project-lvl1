import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const getRightAnswer = (num1, num2, opr) => {
  switch (opr) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

const generateData = () => {
  const roundsData = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const operator = operators[generateRandomNumber(0, operators.length)];
    roundsData.push([`${number1} ${operator} ${number2}`, getRightAnswer(number1, number2, operator).toString()]);
  }
  return roundsData;
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  play(generateData(), rules);
};
export default brainCalc;
