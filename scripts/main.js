let turn = 0;

let value = ["1","2","3","4","5","6","7","8","9","10","vallet","dame","roi"];

let symbol = ["coeur","pique","carreau","trefle"];

let addCardButton = document.querySelector('button');

function getRandomCardNumber() {
  min=1; max=52;
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

addCardButton.addEventListener('click', function(){
  let element;
  if (turn%2===0){
    element = document.querySelector('#bank_section');
  } else {
    element = document.querySelector('#player_section');
  }
  var newCard = document.createElement("img");
  newCard.setAttribute('src','images/PNG/'+getRandomCardNumber()+'.png');
  element.appendChild(newCard);  
  turn++;
})

function game_initialisation(){
  let bank_element = document.querySelector('#bank_section');
  var firstBankCard = document.createElement("img");
  firstBankCard.setAttribute('src','images/PNG/'+getRandomCardNumber()+'.png');
  bank_element.appendChild(firstBankCard);

  let player_element = document.querySelector('#player_section');
  var firstPlayerCard = document.createElement("img");
  var secondPlayerCard = document.createElement("img");
  firstPlayerCard.setAttribute('src','images/PNG/'+getRandomCardNumber()+'.png');
  secondPlayerCard.setAttribute('src','images/PNG/'+getRandomCardNumber()+'.png');
  player_element.appendChild(firstPlayerCard);
  player_element.appendChild(secondPlayerCard);
}

game_initialisation();