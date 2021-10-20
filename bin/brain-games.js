#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off" */
import name from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const UsrName = name;
console.log(`Hello, ${UsrName}!`);

export default UsrName;
