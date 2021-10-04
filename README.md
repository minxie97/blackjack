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

As a BlackJack player, I want the cards to add up correctly.

* Each card should contain a value
* Value of the cards add together when in the hands of player/dealer

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

As a user who has never played blackjack before I want to use this app to learn how to play.

* Informative how-to-play rules present in the app
* Value counter that lets player know how much their hand adds to up
  

