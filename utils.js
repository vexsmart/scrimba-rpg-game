function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(num=>{
        return `<div class="placeholder-dice"></div>`
    }).join("")
}

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}