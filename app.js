'use strict';
var count = 0;
var userScore = 5;
var answer;
var control = false;
var listOfQuestions = ['(Y/N)Does James work in computers currently?', '(Y/N)Does James have problems seeing the color green?', 'Is James a cat or dog person?', '(Y/N)Does James like football?', '(Y/N)Does James like the outdoors?', 'Guess my favorite number'];
var responseToQuestions = ['James has been working in computers for 15 years', 'James has a problem seeing most shades of red, but he can still see pinks and purples. Interesting that he didnt loose mixing the color red with another color!', 'I actually have 2 cats names Courage and Nour, My dogs name is pumpkin', 'I only watch the Superbowl for the commercials, its like going to the movie theater only for the trailers', 'James loves the outdoors, he would rather be on the mountain camping or boarding then at home.', 'My favorite number is 13, how unlucky is that.'];
var listOfUserAnswers = ['Y', 'N', 'DOG', 'N', 'Y', 13];

var player = prompt('Hello player, we are going to play a game so you can learn a little bit about James, before we start we need to know who is playing. What is your name?');
prompt("We are going to play a little game so we can learn a bit more about James before we get to the technical stuff. I am going to ask you a few questions that you will guess the answers to and get You will be shown your score at the end of the quiz. Each question is either a Y, N guessing a number or other cool things about James. Good Luck.")
console.log('The player\'s name is ' + player);

var startGame = confirm('Welcome, ' + player + ' it is nice to have you. Are you ready to start the game?');

for (var i = 0; i <= 4; i++){
  while (control !== true){
    answer = prompt(listOfQuestions[i]).toUpperCase();
      if (answer !== listOfUserAnswers[i]){
        alert("That is not correct");
        userScore--;
      } else {
        alert("Good Job, that is correct! " + responseToQuestions[i]);
        control = true;
      }
    console.log("The answer to quesiton " + listOfQuestions[i] + " " + listOfUserAnswers[i]);
  }
}
for (var i = 5; i <= 6; i++){
  answer = prompt(listOfQuestions[i]);
  if (answer < listOfUserAnswers[i]){
    alert("Too low, try again!");
  }else if (answer > listOfUserAnswers[i]){
    alert("Too High, try again");
  }else {
    alert("Correct, " + responseToQuestions[i]);
  }
}

if (i = 5){
  userScore *= 20;
  alert("You scored " + userScore + "%");
}

alert('Now that we are done with the fun stuff, lets get to the Professional side. When you art ready hit ok to go to the website to learn more about me.');

//Test comment
