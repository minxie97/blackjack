'use strict';

// let cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10'];
// let suitOrder = ['club', 'diamonds', 'hearts', 'spades'];
// let cardNumbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

// imageRef, masterDeck

function CardBuilder(gameValue, suit, number, cardImage){
  this.gameValue = gameValue;
  this.suit = suit;
  this.number = number;
  this.cardImage = cardImage;
}

let aceClubs = new CardBuilder(11, 'clubs', 'ace', 'assets/imgs/cards/vintage/Clubs/Ace.png');
let aceDiamonds = new CardBuilder(11, 'diamonds', 'ace', 'assets/imgs/cards/vintage/Diamonds/Ace.png');
let aceHearts = new CardBuilder(11, 'hearts', 'ace', 'assets/imgs/cards/vintage/Hearts/Ace.png');
let aceSpades = new CardBuilder(11, 'spades', 'ace', 'assets/imgs/cards/vintage/Spades/Ace.png');
let twoClubs = new CardBuilder(2, 'clubs', '2', 'assets/imgs/cards/vintage/Clubs/2.png');
let twoDiamonds = new CardBuilder(2, 'diamonds', '2', 'assets/imgs/cards/vintage/Diamonds/2.png');
let twoHearts = new CardBuilder(2, 'hearts', '2', 'assets/imgs/cards/vintage/Hearts/2.png');
let twoSpades = new CardBuilder(2, 'spades', '2', 'assets/imgs/cards/vintage/Spades/2.png');
let threeClubs = new CardBuilder(3, 'clubs', '3', 'assets/imgs/cards/vintage/Clubs/3.png');
let threeDiamonds = new CardBuilder(3, 'diamonds', '3', 'assets/imgs/cards/vintage/Diamonds/3.png');
let threeHearts = new CardBuilder(3, 'hearts', '3', 'assets/imgs/cards/vintage/Hearts/3.png');
let threeSpades = new CardBuilder(3, 'spades', '3', 'assets/imgs/cards/vintage/Spades/3.png');
let fourClubs = new CardBuilder(4, 'clubs', '4', 'assets/imgs/cards/vintage/Clubs/4.png');
let fourDiamonds = new CardBuilder(4, 'diamonds', '4', 'assets/imgs/cards/vintage/Diamonds/4.png');
let fourHearts = new CardBuilder(4, 'hearts', '4', 'assets/imgs/cards/vintage/Hearts/4.png');
let fourSpades = new CardBuilder(4, 'spades', '4', 'assets/imgs/cards/vintage/Spades/4.png');
let fiveClubs = new CardBuilder(5, 'clubs', '5', 'assets/imgs/cards/vintage/Clubs/5.png');
let fiveDiamonds = new CardBuilder(5, 'diamonds', '5', 'assets/imgs/cards/vintage/Diamonds/5.png');
let fiveHearts = new CardBuilder(5, 'hearts', '5', 'assets/imgs/cards/vintage/Hearts/5.png');
let fiveSpades = new CardBuilder(5, 'spades', '5', 'assets/imgs/cards/vintage/Spades/5.png');
let sixClubs = new CardBuilder(6, 'clubs', '6', 'assets/imgs/cards/vintage/Clubs/6.png');
let sixDiamonds = new CardBuilder(6, 'diamonds', '6', 'assets/imgs/cards/vintage/Diamonds/6.png');
let sixHearts = new CardBuilder(6, 'hearts', '6', 'assets/imgs/cards/vintage/Hearts/6.png');
let sixSpades = new CardBuilder(6, 'spades', '6', 'assets/imgs/cards/vintage/Spades/6.png');
let sevenClubs = new CardBuilder(7, 'clubs', '7', 'assets/imgs/cards/vintage/Clubs/7.png');
let sevenDiamonds = new CardBuilder(7, 'diamonds', '7', 'assets/imgs/cards/vintage/Diamonds/7.png');
let sevenHearts = new CardBuilder(7, 'hearts', '7', 'assets/imgs/cards/vintage/Hearts/7.png');
let sevenSpades = new CardBuilder(7, 'spades', '7', 'assets/imgs/cards/vintage/Spades/7.png');
let eightClubs = new CardBuilder(8, 'clubs', '8', 'assets/imgs/cards/vintage/Clubs/8.png');
let eightDiamonds = new CardBuilder(8, 'diamonds', '8', 'assets/imgs/cards/vintage/Diamonds/8.png');
let eightHearts = new CardBuilder(8, 'hearts', '8', 'assets/imgs/cards/vintage/Hearts/8.png');
let eightSpades = new CardBuilder(8, 'spades', '8', 'assets/imgs/cards/vintage/Spades/8.png');
let nineClubs = new CardBuilder(9, 'clubs', '9', 'assets/imgs/cards/vintage/Clubs/9.png');
let nineDiamonds = new CardBuilder(9, 'diamonds', '9', 'assets/imgs/cards/vintage/Diamonds/9.png');
let nineHearts = new CardBuilder(9, 'hearts', '9', 'assets/imgs/cards/vintage/Hearts/9.png');
let nineSpades = new CardBuilder(9, 'spades', '9', 'assets/imgs/cards/vintage/Spades/9.png');
let tenClubs = new CardBuilder(10, 'clubs', '10', 'assets/imgs/cards/vintage/Clubs/10.png');
let tenDiamonds = new CardBuilder(10, 'diamonds', '10', 'assets/imgs/cards/vintage/Diamonds/10.png');
let tenHearts = new CardBuilder(10, 'hearts', '10', 'assets/imgs/cards/vintage/Hearts/10.png');
let tenSpades = new CardBuilder(10, 'spades', '10', 'assets/imgs/cards/vintage/Spades/10.png');
let jackClubs = new CardBuilder(10, 'clubs', 'jack', 'assets/imgs/cards/vintage/Clubs/Jack.png');
let jackDiamonds = new CardBuilder(10, 'diamonds', 'jack', 'assets/imgs/cards/vintage/Diamonds/Jack.png');
let jackHearts = new CardBuilder(10, 'hearts', 'jack', 'assets/imgs/cards/vintage/Hearts/Jack.png');
let jackSpades = new CardBuilder(10, 'spades', 'jack', 'assets/imgs/cards/vintage/Spades/Jack.png');
let queenClubs = new CardBuilder(10, 'clubs', 'queen', 'assets/imgs/cards/vintage/Clubs/Queen.png');
let queenDiamonds = new CardBuilder(10, 'diamonds', 'queen', 'assets/imgs/cards/vintage/Diamonds/Queen.png');
let queenHearts = new CardBuilder(10, 'hearts', 'queen', 'assets/imgs/cards/vintage/Hearts/Queen.png');
let queenSpades = new CardBuilder(10, 'spades', 'queen', 'assets/imgs/cards/vintage/Spades/Queen.png');
let kingClubs = new CardBuilder(10, 'clubs', 'king', 'assets/imgs/cards/vintage/Clubs/King.png');
let kingDiamonds = new CardBuilder(10, 'diamonds', 'king', 'assets/imgs/cards/vintage/Diamonds/King.png');
let kingHearts = new CardBuilder(10, 'hearts', 'king', 'assets/imgs/cards/vintage/Hearts/King.png');
let kingSpades = new CardBuilder(10, 'spades', 'king', 'assets/imgs/cards/vintage/Spades/King.png');

console.log(aceClubs);

const baseDeck = [];
const decksPlayed = 1;

for (let i = 0; i < decksPlayed; i++) {
  baseDeck.push(
    aceClubs,
    aceDiamonds,
    aceHearts,
    aceSpades,
    twoClubs,
    twoDiamonds,
    twoHearts,
    twoSpades,
    threeClubs,
    threeDiamonds,
    threeHearts,
    threeSpades,
    fourClubs,
    fourDiamonds,
    fourHearts,
    fourSpades,
    fiveClubs,
    fiveDiamonds,
    fiveHearts,
    fiveSpades,
    sixClubs,
    sixDiamonds,
    sixHearts,
    sixSpades,
    sevenClubs,
    sevenDiamonds,
    sevenHearts,
    sevenSpades,
    eightClubs,
    eightDiamonds,
    eightHearts,
    eightSpades,
    nineClubs,
    nineDiamonds,
    nineHearts,
    nineSpades,
    tenClubs,
    tenDiamonds,
    tenHearts,
    tenSpades,
    jackClubs,
    jackDiamonds,
    jackHearts,
    jackSpades,
    queenClubs,
    queenDiamonds,
    queenHearts,
    queenSpades,
    kingClubs,
    kingDiamonds,
    kingHearts,
    kingSpades
  );
}

console.log(baseDeck);
// Durstenfeld Shuffle - create randomized deck array

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(baseDeck);
console.log(baseDeck);

// hand variables

let playerHandCount = 0;
let dealerHandCount = 0;
let playerHand = [];
let dealerHand = [];
let nextCard = baseDeck.pop();

// deal two cards to player and dealer

function dealHandInitial() {
  while (playerHandCount < 2) {
    nextCard;
    playerHand.push(nextCard);
    playerHandCount++;
  }
  while (dealerHandCount < 2) {
    nextCard;
    dealerHand.push(nextCard);
    dealerHandCount++;
  }
}

let stayEl = document.getElementById('stay-button');
let hitEl = document.getElementById('hit-button');
hitEl.addEventListener('click', playerHit); //need to add card render function
stayEl.addEventListener('click', playerStand);

//allows player to request an additional card if not at 21
function playerHit(event) {
  event.preventDefault();
  nextCard;
  playerHand.push(nextCard);
  getTotalValue(playerHand);
  playerHandCount++;
}

//function takes in event listener and kicks off auto deal to add cards
function playerStand(event) {
  event.preventDefault();
  if (playerStand <= 21) {
    dealerHandCount += nextCard;
  }
}

dealHandInitial();
// playerHit();
console.log(playerHand);
console.log(dealerHand);

function sum(a, b) {
  let total = a + b;
  return total;
}

function getTotalValue(array){
  let value = sum(array[0].gameValue, array[1].gameValue);
  for (let i = 2; i < array.length; i++){
    value = sum(value, array[i].gameValue);
  }
  return value;
}

let playerTotal = getTotalValue(playerHand);
let dealerTotal = getTotalValue(dealerHand);
console.log(playerTotal);
console.log(dealerTotal);

let gameWinner = 'none';

function selectWinner (){
  if (dealerTotal === 21) {
    if (dealerTotal > playerTotal){
      gameWinner = 'dealer';
    } else if (dealerTotal === playerTotal){
      gameWinner = 'tie';
    }
  } else if (dealerTotal > 21) {
    if (playerTotal <= 21) {
      gameWinner = 'player';
    }
  } else if (dealerTotal < 21) {
    if (playerTotal < 21 && playerTotal > dealerTotal) {
      gameWinner = 'player';
    } else if (playerTotal < 21 && playerTotal < dealerTotal) {
      gameWinner = 'dealer';
    } else if (playerTotal < 21 && playerTotal === dealerTotal) {
      gameWinner = 'tie';
    }
  }
}

selectWinner();
console.log(gameWinner);
