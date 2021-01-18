#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeToGame from '../src/cli.js';

welcomeToGame();


let globName = ""
function nameSet() {
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello', name, '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  globName = name
  generateRound()
}

let numAnswer = 0
function checkOfNumber(question, correctAnswer) {
  console.log("Question:", question);
  const  answer = readlineSync.question('Your answer: ');
  numAnswer += 1
  if (numAnswer < 3) {
    if (answer === correctAnswer) {
      console.log("Correct!");
      generateRound()
    } else if (answer !== correctAnswer) {
      console.log("Let's try again,",  globName, '!');
      return
    }
    
  } else if (numAnswer = 3) {
    console.log('Congratulations,', globName)
  }
}

const isEvenNumber = (num) => (num % 2 === 0);
const [min, max] = [1, 10];

function generateRound() {
  let question = Math.floor(Math.random() * (max - min + 1)) + min
  let correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  checkOfNumber(question, correctAnswer);
}

nameSet()