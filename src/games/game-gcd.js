import startEngine from '../index.js';
import rundomValue from '../utilsRundom.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

function searchNumber(a, b) {
  let c = a;
  let d = b;
  if (c === 0) return d;
  while (d !== 0) {
    if (c > d) c -= d;
    else d -= c;
  }
  return c;
}

const generateQuestionAndAnswer = () => {
  const firstNumber = rundomValue(1, 110);
  const secondNumber = rundomValue(1, 60);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = searchNumber(firstNumber, secondNumber);
  return [gameQuestion, correctAnswer.toString()];
};

export default () => startEngine(descriptionGame, generateQuestionAndAnswer);
