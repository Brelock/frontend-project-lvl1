import startEngine from '../index.js';
import randomValue from '../utilsRandom.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function findGreatestDivisor(firstNumber, secondNumber) {
  let tempNum1 = firstNumber;
  let tempNum2 = secondNumber;
  if (tempNum1 === 0) return tempNum2;
  while (tempNum2 !== 0) {
    if (tempNum1 > tempNum2) tempNum1 -= tempNum2;
    else tempNum2 -= tempNum1;
  }
  return tempNum1;
}

const generateQuestionAndAnswer = () => {
  const firstNumber = randomValue(1, 110);
  const secondNumber = randomValue(1, 60);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
  return [gameQuestion, correctAnswer.toString()];
};

export default () => startEngine(gameDescription, generateQuestionAndAnswer);
