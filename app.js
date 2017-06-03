'use strict';
var count = 0;
var listOfQuestions = ['(Y/N)Does James work in computers currently?', '(Y/N)Does James have problems seeing the color green?', 'Is James a cat or dog person?', '(Y/N)Does James like football?', '(Y/N)Does James like the outdoors?'];
var listOfUserAnswers[];

var player = prompt('Hello player, we are going to play a game so you can learn a little bit about James, before we start we need to know who is playing. What is your name?');
console.log('The player\'s name is ' + player);
var startGame = confirm('Welcome, ' + player + ' it is nice to have you. Are you ready to start the game?');

debugger;
for (var i = 0; i <= 6; i++){
  var answer = prompt(listOfQuestions[i]);
  listOfUserAnswers[i] = answer;
  console.log("The answer to quesiton " + i + listOfUserAnswers[i]);
};

alert('Now that we are done with the fun stuff, lets get to the Professional side. When you art ready hit ok to go to the website to learn more about me.');
