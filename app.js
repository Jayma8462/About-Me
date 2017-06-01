'use strict';
var i = false; //to set a bool value for later user in loops
var count = 0;

var player = prompt('Hello player, we are going to play a game so you can learn a little bit about James, before we start we need to know who is playing. What is your name?');

console.log('The player\'s name is ' + player);

var startGame = confirm('Welcome, ' + player + ' it is nice to have you. Are you ready to start the game?');

if (startGame === true) {
  alert('Lets start, first question. Go ahead and hit ok.');
} else {
  alert('Hit ok when you are ready to start.');
}

while (i!== true){
  var jobBackground = prompt('(Y/N)Does James work in computers currently?').toUpperCase();
  console.log("Users input for computer question is " + jobBackground);
  switch(jobBackground){
    case 'YES': jobBackground = 'Y'; i = true; break;
    case 'NO': jobBackground = 'N'; i = true; break;
    case 'Y': jobBackground = 'Y'; i = true; break;
    case 'N': jobBackground = 'N'; i = true; break;
    default: alert("This is not a selection you can make, please try again");
  }
}

if (jobBackground === 'Y') {
  alert('Good job, James has been working in IT for 15 years.');
  i = false;
} else {
  alert('Wrong, no cake for you');
  i = false;
}

while (i!== true){
  var colorProblem = prompt('(Y/N)Does James have problems seeing the color green?').toUpperCase();
  console.log("Users input for color question is " + colorProblem);
  switch(colorProblem){
    case 'YES': colorProblem = 'Y'; i = true; break;
    case 'NO': colorProblem = 'N'; i = true; break;
    case 'Y': colorProblem = 'Y'; i = true; break;
    case 'N': colorProblem = 'N'; i = true; break;
    default: alert("This is not a selection you can make, please try again");
  }
}

if (colorProblem == 'Y') {
  alert('That is wrong, James can not see most shades of red');
  i = false;
} else {
  alert('Correct, Good Job. Points for you.');
  i = false;
}

while (i !== true){
  var kindOfPets = prompt('Is James a cat or dog person?').toLowerCase();
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
i = false;

while (i!== true){
  var favSport = prompt('(Y/N)Does James like football?').toUpperCase();
  console.log("Users input for football question is " + favSport)
  switch (favSport){
    case 'YES': favSport = 'Y'; i = true; break;
    case 'NO': favSport = 'N'; i = true; break;
    case 'Y': favSport= 'Y'; i = true; break;
    case 'N': favSport = 'N'; i = true; break;
    default: alert("This is not a selection you can make, please try again");
  }
}
i = false;
if (favSport === 'Y'){
  alert('I dont really like football, but i watch the superbowl ... for the commercials only.');
} else {
  alert('You are correct, i am not a fan of football but i do love Paintball and Disk Golf');
}

while (i!== true){
  var favActivity = prompt('(Y/N)Does James like the outdoors?');
  console.log("Users input for football question is " + favSport);
  switch (favSport){
    case 'YES': favSport = 'Y'; i = true; break;
    case 'NO': favSport = 'N'; i = true; break;
    case 'Y': favSport= 'Y'; i = true; break;
    case 'N': favSport = 'N'; i = true; break;
    default: alert("This is not a selection you can make, please try again");
  }
}
if (favActivity === true){
  alert('Yes I do love the outdoors, i go camping and snoboarding every chance i get.');
} else {
  alert('That is not correct, James goes camping all over the state.');
}

alert('Now that we are done with the fun stuff, lets get to the Professional side. When you art ready hit ok to go to the website to learn more about me.');
//end of day 1
