import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (a, b) => (b === 0 ? a : findGreatestDivisor(b, a % b));
const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNum(1, 10);
  const number2 = generateRandomNum(10, 20);
  const answer = findGreatestDivisor(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
