import { gameProcess } from '..';
import { getRandomNumber, cons } from '../utils';

const gameDescription = "Find the greatest common divisor of given numbers.";
const calculateNOD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return calculateNOD(m, k);
  } return Math.abs(n);
};

const getPair = () => {
  const One = getRandomNumber(1, 99);
  const Two = getRandomNumber(1, 99);
  const trueAnswer = calculateNOD(One, Two);
  return cons(`${One}:${Two}`, trueAnswer);
};


export default () => {
  gameProcess(gameDescription, getPair);
};
