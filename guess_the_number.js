var answer;
var guess;
var max = 10;

$('#max').text(max);

function getRandomNumber() {
  answer = Math.round((Math.random() * max) + 1);
}


// getRandomNumber();
// var name = prompt("What's your name?");
// guess = Number(prompt('Hi ' + name + '! Guess a number between 1 and 10!'));

// console.log(answer)
// console.log(guess)

// if (guess == answer) {
//   alert('Nice! You win')

// } else {

//   alert('Nope! Loooooser.')

// }
