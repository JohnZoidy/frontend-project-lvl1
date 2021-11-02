/* eslint no-restricted-syntax: "off" */
import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const play = (roundsData, rules) => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (const roundData of roundsData) {
    const userAnswer = readlineSync.question(`Question: ${roundData[0]}\nYour answer: `);
    if (userAnswer !== roundData[1]) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundData[1]}'\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
