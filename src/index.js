import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
};

export const checkEven = () => {
  console.log("Welcome to the Brain Games! \nAnswer 'yes' if number even otherwise answer 'no'.\n");
  const Name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${Name}!\n`);

  for (let counter = 1; counter <= 3; counter += 1) {
    const rndNumber = Math.floor(Math.random() * 100);
    const even = (rndNumber % 2 === 0);
    const answer = readlineSync.question(`Question:${rndNumber}\nYou answer:`);

    if ((even === true && answer === 'yes') || (even === false && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!");
      return;
    }
  }
  console.log(`Congratulations, ${Name}!`);
};
