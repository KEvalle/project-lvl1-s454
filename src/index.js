import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const description = text => console.log(text);
export const getAnswerUser = question => readlineSync.question(`Question:${question}\nYou answer:`);
const countQuestion = 3;

export const acquaintance = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const check = (getQuestion, getTrueAnswer, name) => {
  for (let counter = 1; counter <= countQuestion; counter += 1) {
    const question = getQuestion();
    const answer = getAnswerUser(question);
    const trueAnswer = getTrueAnswer(question);

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

export const gameProcess = (textDescription, getQuestion, getTrueAnswer) => {
  welcome();
  description(textDescription);
  const name = acquaintance();
  check(getQuestion, getTrueAnswer, name);
};
