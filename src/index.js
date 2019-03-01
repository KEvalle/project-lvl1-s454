import readlineSync from 'readline-sync';

const isEven = question => question % 2 === 0;
export const welcome = () => console.log('Welcome to the Brain Games!');
export const descriptionEven = () => console.log("Answer 'yes' if number even otherwise answer 'no'.");
export const descriptionCalc = () => console.log('What is the result of the expression?');
export const getQuestion = () => Math.floor(Math.random() * 100);
export const getAnswerEven = question => readlineSync.question(`Question:${question}\nYou answer:`);
export const getTrueAnswerIsEven = question => ((isEven(question)) ? 'yes' : 'no');
export const getAnswerCalc = (calcNumberOne, calcNumberTwo, calcOperator) => readlineSync.question(`Question:${calcNumberOne}${calcOperator}${calcNumberTwo}\nYou answer:`);

export const acquaintance = () => {
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const isOperator = () => {
  const randomNumber = Math.random();
  const part = 1 / 3;
  if (randomNumber <= part) {
    return '+';
  } if (randomNumber <= part * 2) {
    return '-';
  } return '*';
};

const QuestionToAnswer = (calcNumberOne, calcNumberTwo, calcOperator) => {
  if (calcOperator === '+') return calcNumberOne + calcNumberTwo;
  if (calcOperator === '-') return calcNumberOne - calcNumberTwo;
  if (calcOperator === '*') return calcNumberOne * calcNumberTwo;
  return false;
};

export const askName = () => {
  console.log(welcome);
  const actual = readlineSync.question('May I have your name?:');
  console.log(`Hello, ${actual}!`);
};

export const check = (countQuestion, name, game) => {
  for (let counter = 1; counter <= countQuestion; counter += 1) {
    let answer;
    let trueAnswer;
    if (game === 'brain-even') {
      const question = getQuestion();
      answer = getAnswerEven(question);
      trueAnswer = getTrueAnswerIsEven(question);
    } else if (game === 'brain-calc') {
      const calcNumberOne = Math.floor(Math.random() * 100);
      const calcNumberTwo = Math.floor(Math.random() * 100);
      const calcOperator = isOperator();
      trueAnswer = QuestionToAnswer(calcNumberOne, calcNumberTwo, calcOperator);
      answer = getAnswerCalc(calcNumberOne, calcNumberTwo, calcOperator);
    }

    if (answer == trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
