import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Answer 'yes' if number even otherwise answer 'no'.";
const isEven = question => question % 2 === 0;
const getTrueAnswer = question => ((isEven(question)) ? 'yes' : 'no');

export const getPair = () => {
  const question = getRandomNumber(1, 99);
  const trueAnswer = getTrueAnswer(question);
  return cons(`${question}`, trueAnswer);
};

export default () => {
  gameProcess(gameDescription, getPair);
};
