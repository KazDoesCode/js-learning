const button = document.getElementById("DiceRoller")
const result = document.getElementById("resultElement")


function rollDice() {
    
    const dice_input = document.getElementById("dice-input").value
    const diceResults = document.getElementById("DiceResultsDiv")
    const diceImages = document.getElementById("DiceImagesDiv")
    const values=[]   // Our Rolled Dices in a row values (1-6)
    const images=[]   // Images of our Rolled dices in a row

    for (let index = 0; index < dice_input; index++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="images/${value}.png">`)
    }

    result.textContent = values.join("  ")
    diceImages.innerHTML = images.join("")


    
}