const chalk = require('chalk');
let readlineSync = require('readline-sync');


var userName = readlineSync.question("What is your name? ");
console.log(chalk.magenta("Hey " + userName + "!"));
console.log("Let's see how well you know me");
var score = 0;

var quest = [
  qOne = {
    question: "1. What is my favourite Color? (Orange, Blue or Green) ",
    answer: "Orange"
  },
  qTwo = {
    question: "2. Where do I live? (Mumbai, Chennai or Bengaluru) ",
    answer: "Chennai"
  },
  qThree = {
    question: "3. What is my favourite TV show? (Brooklyn 99,  Game of Thrones or The Vampire Diaries) ",
    answer: "Brooklyn 99"
  },
  qFour = {
    question: "4. What is my favourite hobby? (Dancing, Singing or Netflix&Chill) ",
    answer: "Dancing"
  },
  qFive = {
    question: "5. Where would I rather go, the Mountains or the Beach? ",
    answer: "Beach"
  },
  qSix = {
    question: "6. When is my birthday? (20th June, 8th May or 9th October) ",
    answer: "8th May"
  },
  qSeven = {
    question: "7. Am I a morning person or a night owl? ",
    answer: "night owl"
  },
  qEight = {
    question: "8. How many pets did I have as a kid? (1, 2 or None) ",
    answer: "None"
  },
  qNine = {
    question: "9. Am I a Marvel or DC fan? ",
    answer: "Marvel"
  },
  qten = {
    question: "10. What do I prefer, work vacation or work-free holiday? ",
    answer: "work-free holiday"
  },
]

for (var i = 0; i < quest.length; i++) {
  game(quest[i].question, quest[i].answer);
  console.log("\n");
}


function game(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("You are correct!"));
    score = score + 1;
    console.log(chalk.bold.yellowBright("Your score is " + score));
  }
  else {
    console.log(chalk.redBright("You are wrong!"));
    console.log(chalk.bold.yellowBright("Your score is " + score));
  }
}

console.log(chalk.bgBlue("\nYour final score is " + score));

if (score > 6)
  console.log(chalk.greenBright("\n Congratulations! You know me better"));
else
  console.log(chalk.green("\n You dont know me well"));