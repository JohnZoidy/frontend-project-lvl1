#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off" */
import readlineSync from 'readline-sync';
import UsrName from './brain-games.js';

const revAnswer = (answer) => {
  if (answer === 'yes') {
    return 'no';
  }
  return 'yes';
}; // reverse user answer (need for wrong answer replic)
let result = true; // check condition for win or loose
const isEven = (number, answer) => {
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${revAnswer(answer)}'\nLet's try again, ${UsrName}!`);
  return false;
}; // function check random nuber for even and compare with user answer, show replic, return result
console.log('Answer "yes" if the number is even, otherwise answer "no"');
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 10);
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  result = isEven(number, answer);
  if (result === false) {
    break;
  }
} // game cycle
if (result === true) {
  console.log(`Congratulations, ${UsrName}!`);
} // win replic
