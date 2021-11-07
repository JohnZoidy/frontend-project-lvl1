import { play, roundsCount } from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const generateProgression = (progLength, progFirst, progStep) => {
  const progression = [];
  for (let i = 0; i < progLength; i += 1) {
    progression[i] = progFirst + i * progStep;
  }
  return progression;
};

const generateData = () => {
  const roundsData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const progLength = generateRandomNumber(6, 6);
    const progFirst = generateRandomNumber(1, 10);
    const progStep = generateRandomNumber(1, 10);
    const prog = generateProgression(progLength, progFirst, progStep);
    const rightIndex = generateRandomNumber(0, prog.length);
    const rightAnswer = prog[rightIndex];
    prog[rightIndex] = '..';
    roundsData.push([prog.join(' '), rightAnswer.toString()]);
  }
  return roundsData;
};

const brainProg = () => {
  const rules = 'What number is missing in the progression?';
  play(generateData(), rules);
};
export default brainProg;
