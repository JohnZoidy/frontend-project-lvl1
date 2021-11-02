import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const generateProgression = () => {
  const progression = [];
  const progLength = generateRandomNumber(6, 6);
  const progFirst = generateRandomNumber(1, 10);
  const progStep = generateRandomNumber(1, 10);
  for (let i = 0; i < progLength; i += 1) {
    progression[i] = progFirst + i * progStep;
  }
  return progression;
};

const roundsDataGenerator = () => {
  const roundsData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const prog = generateProgression();
    const rightIndex = generateRandomNumber(0, prog.length);
    const rightAnswer = prog[rightIndex];
    prog[rightIndex] = '..';
    roundsData.push([prog.join(' '), rightAnswer.toString()]);
  }
  return roundsData;
};

const brainProg = () => {
  play(roundsDataGenerator(), 'What number is missing in the progression?');
};
export default brainProg;
