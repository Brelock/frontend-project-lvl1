import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => (new Array(length))
  .fill(start)
  .map((element, currentIndex) => (element + step * currentIndex));

const generateQuestionAndAnswer = () => {
  const progressionStart = generateRandomNum(1, 50);
  const progressionLength = 10;
  const hiddenElementIndex = generateRandomNum(0, progressionLength - 1);
  const progressionStep = generateRandomNum(1, 5);

  const progression = generateProgression(progressionStart, progressionStep, progressionLength);

  const answer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
