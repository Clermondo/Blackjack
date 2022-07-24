/* Great randomizer
function getRandomInteger(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  console.log(Math.floor(Math.random() * (max - min)) + min)
  console.log("Uh")
}

let firstCard = getRandomInteger()
let secondCard = getRandomInteger()
*/
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
//let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

let player = {
  name: "Jerry",
  chips: "",
  sayHello: function(){
    console.log ("Hello") // Methods are functions that are attached to objects
  }
}

playerEl.innerText = player.name + ": $" + player.chips
player.sayHello()


function getRandomCard(){
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
  if(randomNumber === 1){
    console.log("Random number was 1 so that's 11 points")
    return 11
  }else if(randomNumber > 10){
  //else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
    console.log("Random number was 11 12 or 13 so that's 10 points")
    return 10
  }else
  return randomNumber
}

function startGame(){
  messageEl.innerText = "You started a new game"
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard] // array - ordered list of items
  sum = firstCard + secondCard
  isAlive = true
  setTimeout (function () {
    renderGame();
  }, 2000);
}



function renderGame(){
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++){
  cardsEl.textContent += (cards[i]) + " "
  }

  sumEl.textContent = "Sum: " + sum
  if(sum <= 20){
    messageEl.innerText = ("Do you want to draw another card?")
  } else if (sum === 21) {
    messageEl.innerText = ("You got blackjack")
    hasBlackJack = true
  } else /*if (sum > 21)*/{
    messageEl.innerText = ("You lose")
    isAlive = false
  }
}


function newCard(){
  if( isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
    console.log("Clicked")
  }else{
    console.log("No")
  }
}
