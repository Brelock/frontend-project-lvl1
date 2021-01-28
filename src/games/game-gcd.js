import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const findGreatestDivisor = (a, b) => (b === 0 ? a : findGreatestDivisor(b, a % b));

const generateQuestionAndAnswer = () => {
  const firstNumber = generateRandomNum(1, 110);
  const secondNumber = generateRandomNum(1, 60);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
  return [gameQuestion, correctAnswer.toString()];
};

export default () => startEngine('Find the greatest common divisor of given numbers.', generateQuestionAndAnswer);
