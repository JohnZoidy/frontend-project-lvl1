/* eslint no-console: "off", import/extensions: "off" */
import { play, ranNumber, gamesCount } from '../index.js';
import { Greetings } from '../cli.js';

const makeProg = () => {
  const Prog = []; // result progression
  let rightAnswer = ''; // result right answer
  const progLength = ranNumber(6, 6);// random length generator
  let progFirst = ranNumber(1, 10);// random first number generator
  const progIncr = ranNumber(1, 10);// random icrement generator
  Prog.push(progFirst); // add frist number to progression
  for (let i = 0; i < progLength - 1; i += 1) {
    progFirst += progIncr;
    Prog.push(progFirst);
  } // make rest of progression
  rightAnswer = Prog[progLength - 4].toString();
  Prog[progLength - 4] = '..';
  return [Prog.join(' '), rightAnswer];
}; // make progression
const expression = () => {
  const result = [];
  for (let i = 0; i < gamesCount; i += 1) {
    result.push(makeProg());
  }
  return result;
};// return 3 pairs of answer-expression
const brainProg = () => {
  Greetings();
  console.log('What number is missing in the progression?');
  play(expression());
};
export default brainProg;
