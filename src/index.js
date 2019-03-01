import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const description = `Answer 'yes' if number even otherwise answer 'no'.`;
const countQuestion = 3;

export const askName = () => {
  console.log(welcome);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
};

export const checkEven = () => {
  console.log(welcome);
  console.log(description);

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);

  for (let counter = 1; counter <= countQuestion; counter += 1) {
    const question = Math.floor(Math.random() * 100);
    const even = (question % 2 === 0);
    const answer = readlineSync.question(`Question:${question}\nYou answer:`);
    const trueAnswer = (isEven(question) === true) ? 'yes' : 'no';

    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!");
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const isEven = (question) => question % 2 === 0;
