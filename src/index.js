import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const description = text => console.log(text);
export const getAnswerUser = question => readlineSync.question(`Question:${question}\nYou answer:`);
const countQuestion = 3;

export const acquaintance = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const check = (getPair, name) => {
  for (let counter = 1; counter <= countQuestion; counter += 1) {
    const pairNew = getPair();
    const answer = getAnswerUser(car(pairNew));
    const trueAnswer = `${cdr(pairNew)}`;

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const gameProcess = (textDescription, getPair = 'none') => {
  welcome();
  description(textDescription);
  const name = acquaintance();
  if (getPair !== 'none') check(getPair, name);
};
