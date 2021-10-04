'use strict';

// let cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10'];
// let suitOrder = ['club', 'diamond', 'hearts', 'spades'];
// let cardNumbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

// imageRef, masterDeck

function CardBuilder(gameValue, suit, number){
  this.gameValue = gameValue;
  this.suit = suit;
  this.number = number;
}

let aceClub = new CardBuilder(1, 'clubs', 'ace');
let aceDiamond = new CardBuilder(1, 'diamond', 'ace');
let aceHearts = new CardBuilder(1, 'hearts', 'ace');
let aceSpades = new CardBuilder(1, 'spades', 'ace');
let twoClub = new CardBuilder(2, 'clubs', '2');
let twoDiamond = new CardBuilder(2, 'diamond', '2');
let twoHearts = new CardBuilder(2, 'hearts', '2');
let twoSpades = new CardBuilder(2, 'spades', '2');
let threeClub = new CardBuilder(3, 'clubs', '3');
let threeDiamond = new CardBuilder(3, 'diamond', '3');
let threeHearts = new CardBuilder(3, 'hearts', '3');
let threeSpades = new CardBuilder(3, 'spades', '3');
let fourClub = new CardBuilder(4, 'clubs', '4');
let fourDiamond = new CardBuilder(4, 'diamond', '4');
let fourHearts = new CardBuilder(4, 'hearts', '4');
let fourSpades = new CardBuilder(4, 'spades', '4');
let fiveClub = new CardBuilder(5, 'clubs', '5');
let fiveDiamond = new CardBuilder(5, 'diamond', '5');
let fiveHearts = new CardBuilder(5, 'hearts', '5');
let fiveSpades = new CardBuilder(5, 'spades', '5');
let sixClub = new CardBuilder(6, 'clubs', '6');
let sixDiamond = new CardBuilder(6, 'diamond', '6');
let sixHearts = new CardBuilder(6, 'hearts', '6');
let sixSpades = new CardBuilder(6, 'spades', '6');
let sevenClub = new CardBuilder(7, 'clubs', '7');
let sevenDiamond = new CardBuilder(7, 'diamond', '7');
let sevenHearts = new CardBuilder(7, 'hearts', '7');
let sevenSpades = new CardBuilder(7, 'spades', '7');
let eightClub = new CardBuilder(8, 'clubs', '8');
let eightDiamond = new CardBuilder(8, 'diamond', '8');
let eightHearts = new CardBuilder(8, 'hearts', '8');
let eightSpades = new CardBuilder(8, 'spades', '8');
let nineClub = new CardBuilder(9, 'clubs', '9');
let nineDiamond = new CardBuilder(9, 'diamond', '9');
let nineHearts = new CardBuilder(9, 'hearts', '9');
let nineSpades = new CardBuilder(9, 'spades', '9');
let tenClub = new CardBuilder(10, 'clubs', '10');
let tenDiamond = new CardBuilder(10, 'diamond', '10');
let tenHearts = new CardBuilder(10, 'hearts', '10');
let tenSpades = new CardBuilder(10, 'spades', '10');
let jackClub = new CardBuilder(10, 'clubs', 'jack');
let jackDiamond = new CardBuilder(10, 'diamond', 'jack');
let jackHearts = new CardBuilder(10, 'hearts', 'jack');
let jackSpades = new CardBuilder(10, 'spades', 'jack');
let queenClub = new CardBuilder(10, 'clubs', 'queen');
let queenDiamond = new CardBuilder(10, 'diamond', 'queen');
let queenHearts = new CardBuilder(10, 'hearts', 'queen');
let queenSpades = new CardBuilder(10, 'spades', 'queen');
let kingClub = new CardBuilder(10, 'clubs', 'king');
let kingDiamond = new CardBuilder(10, 'diamond', 'king');
let kingHearts = new CardBuilder(10, 'hearts', 'king');
let kingSpades = new CardBuilder(10, 'spades', 'king');

console.log(tenSpades);

const baseDeck = [];
baseDeck.push(
  aceClub,
  aceDiamond,
  aceHearts,
  aceSpades,
  twoClub ,
  twoDiamond,
  twoHearts,
  twoSpades,
  threeClub,
  threeDiamond,
  threeHearts ,
  threeSpades,
  fourClub,
  fourDiamond,
  fourHearts,
  fourSpades,
  fiveClub,
  fiveDiamond,
  fiveHearts,
  fiveSpades,
  sixClub,
  sixDiamond,
  sixHearts,
  sixSpades,
  sevenClub,
  sevenDiamond,
  sevenHearts,
  sevenSpades,
  eightClub,
  eightDiamond,
  eightHearts,
  eightSpades,
  nineClub,
  nineDiamond,
  nineHearts,
  nineSpades,
  tenClub,
  tenDiamond,
  tenHearts,
  tenSpades,
  jackClub,
  jackDiamond,
  jackHearts,
  jackSpades,
  queenClub,
  queenDiamond,
  queenHearts,
  queenSpades,
  kingClub,
  kingDiamond,
  kingHearts,
  kingSpades
);


