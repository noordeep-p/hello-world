let prompt = require("prompt-sync")();

const randomNumber = Math.round((Math.random() * 100));
const lastAttempt = [];
console.log(lastAttempt, randomNumber);

const numberGuesser = function() {
  console.log("Guess a number:");
  let answer = Number(prompt("> "));
  
  if (!isNaN(answer) && !lastAttempt.includes(answer)) {

    if (answer < randomNumber) {
      lastAttempt.push(answer);
      console.log('Too Low!');
      numberGuesser();
      
    } else if (answer > randomNumber) {
      lastAttempt.push(answer);
      console.log("Too High!");
      numberGuesser();
      
    } else if (answer === randomNumber) {
      lastAttempt.push(answer);
      console.log(`You got it! You took ${lastAttempt.length} attempts!`);
    }

  } else if (isNaN(answer)) {
    console.log("Not a Number! Try agian!");
    numberGuesser();

  } else if (lastAttempt.includes(answer)) {
    console.log("Already Guessed!");
    numberGuesser();
  }
};

numberGuesser();