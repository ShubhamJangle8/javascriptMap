let dice = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

do {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.set(diceNumber, dice.get(diceNumber) + 1);
} while (dice.get(diceNumber) != 10);

var counts = Array.from(dice.values());
var max = Math.max(...counts);
var min = Math.min(...counts);
console.log("Max count is " + max);
console.log("Min count is " + min);

console.log("Dice Number with Maximum counts");
dice.forEach((value, key) => {
    if (value == max) {
        console.log("is "+ key + " -> "  + value + "  times ");
    }
})

console.log("Dice Number with Minimum counts");
dice.forEach((value, key) => {
    if (value == min) {
        console.log("is "+ key + " -> "  + value + "  times ");
    }
})

