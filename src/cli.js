/* eslint no-console: "off", import/extensions: "off" */
import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
export const Greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export default name;
