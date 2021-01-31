import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'What number is missing in the progression?';

const generatingProgression = (start, step, length) => (new Array(length))
  .fill(start)
  .map((element, currentIndex) => (element + step * currentIndex));

const generateQuestionAndAnswer = () => {
  const progressionLength = generateRandomNum(5, 10);
  const step = generateRandomNum(2, 5);
  const start = generateRandomNum(1, 50);

  const question = generatingProgression(start, step, progressionLength);
  const randomIndex = generateRandomNum(0, question.length - 1);
  const answer = question[randomIndex].toString();
  question[randomIndex] = '..';
  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
