
//Setting conditional statement for sum of cards
let firstCard = 9
let secondCard = 5
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el") - another way to do the same thing
let cardsEl = document.getElementById("cards-el")

    function startGame() {
        renderGame()
    }
    function renderGame() {

        cardsEl.textContent = "Cards:" + firstCard + "+" + secondCard
        sumEl.textContent = "Sum:" + sum

        if (sum <= 20){
            message = "Do you want to draw a new card?🙂"
        } 
        else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!🥳"
            hasBlackJack = true 
        } 
        else {
            message = "You're out of the game!😭"
            isAlive = false
        }
        
        messageEl.textContent = message
    }

    function newCard(){
        console.log("you drew a new card")

        let card = 10

        sum += card

        renderGame()
    }