function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    let sum = 0;

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;    
        sum += value;
        values.push(value);
        images.push(`<img src="images/${value}dice.png" draggable="false">`);
    }

    diceResult.textContent = `You got dices: ${values.join(', ')} with a sum of: ${sum}`;
    diceImages.innerHTML = images.join('');
}