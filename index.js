
//Setting conditional statement for sum of cards
let firstCard = 8
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20){
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    hasBlackJack = true 
    message = "Wohoo! You've got Blackjack! 🥳"
} else {
    isAlive = false
    "You're out of the game! 😭"
}

//CASH OUT condition 
//console.log(hasBlackJack)
//console.log(isAlive)
console.log(message)