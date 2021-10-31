/* eslint no-console: "off", import/extensions: "off", no-restricted-syntax: "off" */
import readlineSync from 'readline-sync';

export const ranNumber = (min, max) => Math.floor(Math.random() * max + min);
export const gamesCount = 3;

export const play = (exp, rules) => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  if (!exp || !rules) {
    return console.log(`Hello, ${name}!`);
  }
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (const tmp of exp) {
    const answer = readlineSync.question(`Question: ${tmp[0]}\nYour answer: `);
    if (answer === tmp[1]) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${tmp[1]}'\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
