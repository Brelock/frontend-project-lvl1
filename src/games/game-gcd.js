import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (a, b) => (b === 0 ? a : findGreatestDivisor(b, a % b));
const generateQuestionAndAnswer = () => {
  const firstNumber = generateRandomNum(1, 110);
  const secondNumber = generateRandomNum(1, 60);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGreatestDivisor(firstNumber, secondNumber).toString();
  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
