# blackjack

Project Members: 
* Christopher Harden
* Jared Barnes
* Jordan Fleming
* Minhang Xie

About:
* This application is a browser blackjack game.

## Wireframe:
![BlackJack](./img/BlackJack%20Wireframe.png)

## User Story:
As a BlackJack player, I want play with a 52-card deck that is adequately shuffled.

feature tasks
* Built in 52-card deck that features all cards in each suit.
* Shuffling mechanism that randomizes the order of the cards on start.

acceptance test
* Ensure that all 52 cards are present
* Ensure that no cards repeat
* Ensure that cards are truly randomized without bias

As a BlackJack player, I want 2 cards to be dealt to me and the dealer.

feature tasks
* On start, two cards are dealt face up to the player 
* On start, two cards, one face down, is dealt to the dealer

acceptance test
* Ensure that only two cards are dealt to dealer and player
* Ensure that dealer's cards are face down

As a BlackJack player, I want the cards to add up.

feature task
* Each card should contain a value
* Value of the cards add together when in the hands of player/dealer

acceptance test
* The values add up correctly

As a BlackJack player, I want to choose whether to hit or stand.

feature tasks
* Clicking hit deals another card to the player. 
* Clicking stand does not deal a card and the player's turn ends.
* The dealer turn begins by revealing face down card
  * If dealer is under 17 they hit until they are 17 or over

acceptance test
* Ensure that the hit button deals only one card
* Ensure that new card values are added to current hand
* Ensure that the dealer hitting process is automatic and begin as soon as player clicks stand

As a BlackJack player, I want know when I win and when I lose.

feature tasks:
* Dealer cards are compared to player card totals
* If player is at 21 or closer to 21
  * Notify player they have won
* Else if, the dealer is at 21 or closer
  * Notify player they have lost
* Else if, Notify player they are over 21
  * Notify player they have lost
* Else if, Notify player if dealer is over 21
  * Notify player if they have won
* When player or the dealer loses. Return to start screen.

As a user who has never played blackjack before I want to use this app to learn how to play.

* Informative how-to-play rules present in the app
* Value counter that lets player know how much their hand adds to up
  
## Software Requirements

### Vision
What is the vision of this product?
    - A player is dealt two cards from a deck of cards (52), object is to get to 21 without going over. (Play a round of cards).
What pain point does this project solve?
    - Blackjack is a time killer as well as a gambling game. Do you want to burn some time before your next casion trip practicing with our game will help you refine margins and probablility. 
Why should we care about your product?
    - Our product is taking a classic game and bringing it to the modern era. This game is simple and a classic that should be taught and shown to others. As well as this product will make the game avaliable 24/7 365.
    
### Scope
In
* The web app will let player play a fair game of blackjack against the computer
* The web app will feature basic mechanism in blackjack such as hit and stand
* The web app will assess the values between the player and dealer hand to find winner
* The web app will allow you to play as many rounds as you want
Out
* The web app will not be a mobile application
* Will not be a multiplayer game. Just single player vs. computer

## MVP
* A player is dealt two cards from a deck, object is to get to 21 without going over.
* Allow player to request "Hit" - as long as they want.
* Allow player to "Stand" - (aka, "stay") and end turn
* Show card value of player and dealer
* Dealer automatically hits when player 'Stands' until dealer reaches a value of 17 or higher.
* Busts when value exceeds 21
* Dealer has one card down and one up.
* Player has two cards faceup
* Winner is announced and option is given to play another round

## Stretch
* "Natural 21"
* "Split"
* "Double"
* "Surrender"
* Betting System
* Drunk State, buttons for hit, stand, stay, start moving rapidly.

## Functional Requirements 
* * The web app will generate a shuffled deck of standard playing cards and deal hand to both player and dealer
* The web app will allow players to choose 'hit' or 'stand'
* The web app will keep track of the hands' values as the game goes on
* The web app will know if the value exceeds 21 and end the game
* The web app will assess the values between dealer and player and choose winner

![BlackJack Domain](https://user-images.githubusercontent.com/89370759/135938810-258869b7-c966-494b-baae-c09decf71ce4.png)
