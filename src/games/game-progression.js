import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const generatingProgression = (start, step, length) => (new Array(length))
  .fill(start)
  .map((element, currentIndex) => (element + step * currentIndex));

const generateQuestionAndAnswer = () => {
  const progressionLength = generateRandomNum(5, 10);
  const step = generateRandomNum(2, 5);
  const start = generateRandomNum(1, 50);

  const gameQuestion = generatingProgression(start, step, progressionLength);
  const randomIndex = generateRandomNum(0, gameQuestion.length - 1);
  const correctAnswer = gameQuestion[randomIndex];
  gameQuestion[randomIndex] = '..';
  return [gameQuestion.join(' '), correctAnswer.toString()];
};

export default () => startEngine('What number is missing in the progression?', generateQuestionAndAnswer);
