/* eslint no-console: "off", import/extensions: "off", no-restricted-syntax: "off" */
import readlineSync from 'readline-sync';
import name from './cli.js';

export const ranNumber = (min, max) => Math.floor(Math.random() * max + min);// number generator
export const gamesCount = 3;
export const play = (exp) => {
  for (const tmp of exp) {
    console.log(tmp);
    const answer = readlineSync.question(`Question: ${tmp[0]}\nYour answer: `);
    if (answer === tmp[1]) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${tmp[1]}'\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}; // game cycle and congrats
