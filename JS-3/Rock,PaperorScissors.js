const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
};

let userInput = 'rock';

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
 return userInput; 
}else if('rock'){
  console.log('rock');
}else if('Paper'){
  console.log('paper')
}else if('scissors'){
  console.log('scissors')
}else{
  console.log('Error!');
}



let getComputerChoice = Math.floor(Math.random() * 3);
