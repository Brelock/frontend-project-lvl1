import startEngine from '../index.js';
import randomValue from '../utilsRandom.js';

const gameDescription = 'What number is missing in the progression?';

function generatingProgression() {
  const gameQuestion = [];
  const lengthProgression = randomValue(5, 10);
  const randomStep = randomValue(2, 5);
  const start = randomValue(1, 50);
  for (let i = start; gameQuestion.length < lengthProgression; i += randomStep) {
    gameQuestion.push(i);
  }
  return gameQuestion;
}

const generateQuestionAndAnswer = () => {
  const gameQuestion = generatingProgression();
  const randomIndex = randomValue(0, gameQuestion.length - 1);
  const correctAnswer = gameQuestion[randomIndex];
  gameQuestion[randomIndex] = '..';
  return [gameQuestion.join(' '), correctAnswer.toString()];
};

export default () => startEngine(gameDescription, generateQuestionAndAnswer);
