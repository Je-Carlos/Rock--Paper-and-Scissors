const playerSelection = prompt("Escolha entre Pedra, Papel e Tesoura").toLowerCase();

let playerScore = 0;
let computerScore = 0;
let empateScore = 0;

function getPlayerChoice(playerSelection){
return playerSelection;
} // Função que retorna a escolha do jogador	

function getComputerChoice(){
  const options = ["pedra", "papel", "tesoura"];
  const computerSelection = Math.floor(Math.random() * options.length);
  return options[computerSelection];
} // Função que retorna a escolha do computador

function playRound(playerSelection, computerSelection){


  if (playerSelection === computerSelection){
    empateScore++;
    return "Empate";
  }
  if (playerSelection === "pedra"){
    if (computerSelection === "papel"){
      computerScore++;
      return "Você perdeu! Papel cobre pedra";
    } else {
      playerScore++;
      return "Você ganhou! Pedra quebra tesoura";
    }
  }
  if (playerSelection === "papel"){
    if (computerSelection === "tesoura"){
      computerScore++;
      return "Você perdeu! Tesoura corta papel";
    } else {
      playerScore++;
      return "Você ganhou! Papel cobre pedra";
    }
  }
  if (playerSelection === "tesoura"){
    if (computerSelection === "pedra"){
      computerScore++;
      return "Você perdeu! Pedra quebra tesoura";
    } else {
      playerScore++;
      return "Você ganhou! Tesoura corta papel";
    }
  }
} // Função que retorna o resultado da rodada


function game(){
  for (let i = 0; i < 5; i++){
    const gamePlayerSelection = getPlayerChoice(playerSelection);
    const gameComputerSelection = getComputerChoice();
    const result = playRound(gamePlayerSelection, gameComputerSelection);
    console.log(result);
    
  }
}

console.log(game());
console.log("Você ganhou " + playerScore + " vezes");
console.log("O computador ganhou " + computerScore + " vezes");
console.log("Empatou " + empateScore + " vezes");