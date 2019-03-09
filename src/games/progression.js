import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const getProgression = () => {
  const startElement = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const indexHide = getRandomNumber(1, 10);
  let numberHide;
  let progression = '';
  let counterHide = 0;
  const upBorder = startElement + step * lengthProgression;

  for (let counter = startElement; counter < upBorder; counter += step) {
    counterHide += 1;
    if (counterHide === indexHide) {
      numberHide = counter;
      progression += ' ..';
    } else progression += ` ${counter}`;
  }
  return cons(progression, numberHide);
};

export default () => {
  gameProcess(gameDescription, getProgression);
};
