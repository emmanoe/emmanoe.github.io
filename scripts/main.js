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