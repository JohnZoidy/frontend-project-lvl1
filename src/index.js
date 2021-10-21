/* eslint no-console: "off", import/extensions: "off" */
/* eslint import/no-named-as-default: "off", import/no-named-as-default-member: "off" */
import readlineSync from 'readline-sync';
import UsrName from '../bin/brain-games.js';

export const ranNumber = (min, max) => Math.floor(Math.random() * max + min);// number generator
const getAnswer = ([expression, rightIn]) => {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  if (answer === rightIn) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightIn}'\nLet's try again, ${UsrName}!`);
  return false;
}; // return answer for question and chek it
export const play = (exp) => {
  let loose = false;
  for (let i = 0; i < 3; i += 1) {
    if (getAnswer(exp[i]) === false) {
      loose = true;
      break;
    }
  }
  if (loose === false) {
    console.log(`Congratulations, ${UsrName}!`);
  }
};// game cycle and congrats
