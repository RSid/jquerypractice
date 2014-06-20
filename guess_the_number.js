var answer;
var guess;
var max = 10;

$('#max').text(max);
$('#newgame').hide();

function getRandomNumber() {
  answer = Math.round((Math.random() * max) + 1);
}
getRandomNumber();


$(document).ready(function(){
  $("#guess").keyup(function(){

    guess = $('#guess').val()
    debugger
      if( !isNaN(Number(guess)) ) {
        if (Number(guess) == answer) {
          $('#feedback').text('Nice! You win');
          $('#newgame').show();

        } else {

          if (Number(guess) < answer) {
            $('#feedback').text('Nope! Too low.');

          } else {
            $('#feedback').text('Nope! Too high.');

          }
          }
      } else {
        $('#feedback').text('Please enter a number between 1 and 10');
      }

    });

})

