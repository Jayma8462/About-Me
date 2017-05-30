'use strict';
var i = false;

var player = prompt('Hello player, we are going to play a game so you can learn a little bit about James, before we start we need to know who is playing. What is your name?');

console.log('The player\'s name is ' + player);

var startGame = confirm('Welcome, ' + player + ' it is nice to have you. Are you ready to start the game?');

if (startGame === true) {
  alert('Lets start, first question. Go ahead and hit ok.');
} else {
  alert('Hit ok when you are ready to start.');
}

var jobBackground = confirm('Does James work in computers currently?');

if (jobBackground === true) {
  alert('Good job, James has been working in IT for 15 years.');
} else {
  alert('Wrong, no cake for you');
}

var colorProblem = confirm('Does James have problems seeing the color green?');

if (colorProblem == true) {
  alert('That is wrong, James can not see most shades of red');
} else {
  alert('Correct, Good Job. Points for you.');
}

while (i !== true){
  var kindOfPets = prompt('Is James a cat or dog person?'.toLowerCase());
  console.log('Users animal entry is ' + kindOfPets);
  switch(kindOfPets){
  case 'cat':
    alert('You are correct, James has 2 cats. They are both named Courage and Noir. But he also has a dog names Pumpkin.');
    i = true;
    break;
  case 'dog':
    alert('That is correct, her name is Pumpkin. But James also has 2 cats names Courage and Noir');
    i = true;
    break;
  default: alert('That was not a selection you can make, try again');
  }
}

var favSport = confirm('Does James like football?');

if (favSport === true){
  alert('I dont really like football, but i watch the superbowl ... for the commercials only.');
} else {
  alert('You are correct, i am not a fan of football but i do love Paintball and Disk Golf');
}

var favActivity = confirm('Does James like the outdoors?');

if (favActivity === true){
  alert('Yes I do love the outdoors, i go camping and snoboarding every chance i get.');
} else {
  alert('That is not correct, James goes camping all over the state.');
}

alert('Now that we are done with the fun stuff, lets get to the Professional side. When you art ready hit ok to go to the website to learn more about me.');
//end of day 1
