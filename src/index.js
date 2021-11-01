/* eslint no-restricted-syntax: "off" */
import readlineSync from 'readline-sync';

export const gamesCount = 3;

export const play = (roundsData, rules) => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (const round of roundsData) {
    const answer = readlineSync.question(`Question: ${round[0]}\nYour answer: `);
    if (answer !== round[1]) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round[1]}'\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
