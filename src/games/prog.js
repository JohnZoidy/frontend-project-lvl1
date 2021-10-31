/* eslint no-console: "off", import/extensions: "off" */
import { play, ranNumber, gamesCount } from '../index.js';

const makeProg = () => {
  const Prog = [];
  const progLength = ranNumber(6, 6);
  const progFirst = ranNumber(1, 10);
  const progStep = ranNumber(1, 10);
  for (let i = 0; i < progLength - 1; i += 1) {
    Prog[i] = progFirst + i * progStep;
  }
  return Prog;
};

const expression = () => {
  const result = [];

  for (let i = 0; i < gamesCount; i += 1) {
    const prog = makeProg();
    const rightIndex = ranNumber(0, prog.length);
    const rightAnswer = prog[rightIndex];
    prog[rightIndex] = '..';
    result.push([prog.join(' '), rightAnswer.toString()]);
  }
  return result;
};

const brainProg = () => {
  play(expression(), 'What number is missing in the progression?');
};
export default brainProg;
