/* eslint no-console: "off", import/extensions: "off" */
import { play } from '../src/index.js';

console.log('What number is missing in the progression?');
const makeProg = () => {
  const Prog = []; // result progression
  let rightAnswer = ''; // result right answer
  const progLength = Math.floor(Math.random() * 5 + 6);// random length generator
  let progFirst = Math.floor(Math.random() * 10 + 1);// random first number generator
  const progIncr = Math.floor(Math.random() * 10 + 1);// random icrement generator
  Prog.push(progFirst); // add frist number to progression
  for (let i = 0; i < progLength - 1; i += 1) {
    progFirst += progIncr;
    Prog.push(progFirst);
  } // make rest of progression
  rightAnswer = Prog[progLength - 4].toString();
  Prog[progLength - 4] = '..';
  return [Prog, rightAnswer];
}; // make progression
const expression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(makeProg());
  }
  return result;
};// return 3 pairs of answer-expression
const brainProg = () => {
  play(expression());
};
export default brainProg;
