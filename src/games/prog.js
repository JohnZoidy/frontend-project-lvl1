import { play, gamesCount } from '../index.js';
import ranNumber from '../rangen.js';

const generateProgression = () => {
  const progression = [];
  const progLength = ranNumber(6, 6);
  const progFirst = ranNumber(1, 10);
  const progStep = ranNumber(1, 10);
  for (let i = 0; i < progLength - 1; i += 1) {
    progression[i] = progFirst + i * progStep;
  }
  return progression;
};

const roundsDataGenerator = () => {
  const roundsData = [];

  for (let i = 0; i < gamesCount; i += 1) {
    const prog = generateProgression();
    const rightIndex = ranNumber(0, prog.length);
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
