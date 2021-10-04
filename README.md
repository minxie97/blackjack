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
As a BlackJack player, I want a fair blackjack game that is winnable against a dealer.

As a user who has never played blackjack before I want to use this ap to learn how to play.
  Create an algorithm that randomly produces two cards for the player and one card showing for the dealer, other dealer card will be face down.

As a user I want to choose whether to hit or stand.
  * Once the user 'clicks' hit, another card is dealt.
  * A counter updates the player card values
  * If player is at 21 or under and they request stand
    * Player turn ends and dealer begins
  
  * The dealer turn begins by revealing face down card
    * If dealer is under 17 they hit until they are 17 or over
  
  * Dealer cards are compared to player card totals
  * If player is at 21 or closer to 21
    * Notify player they have won
  * Else if, the dealer is at 21 or closer
    * Notify player they have lost
  * Else if, Notify player they are over 21
    * Notify player they have lost
  * Else if, Notify player if dealer is over 21
    * Notify player if they have won
