function getUserChoice() {
  var userInput = prompt('Rock, Paper, or Scissors?');
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Error!');
  }
}

function getComputerChoice () {
 var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    default:
      return 'scissors';
                      }
}
function determineWinner( userChoice, computerChoice){
  if (userChoice === computerChoice){
    return ' Its a tie! try again';
  }
    if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
   if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  alert ('You threw: ' + ' ' + userChoice);
  alert('Computer through: ' + ' ' + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
}
playGame();
