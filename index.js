
//Setting conditional statement for sum of cards
let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el") - another way to do the same thing
let cardsEl = document.getElementById("cards-el")

    function startGame() {
        cardsEl.textContent = "Cards:" + firstCard + "+" + secondCard
        sumEl.textContent = "Sum:" + sum

        if (sum <= 20){
            message = "Do you want to draw a new card? 🙂"
        } else if (sum === 21) {
            hasBlackJack = true 
            message = "Wohoo! You've got Blackjack! 🥳"
        } else {
            isAlive = false
            "You're out of the game! 😭"
        }
        
        messageEl.textContent = message
    }

    function newCard(){
        console.log("you drew a new card")
    }