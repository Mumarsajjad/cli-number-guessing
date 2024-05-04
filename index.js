import inquirer from 'inquirer';
// 1) generate a generate a random number
// 2) user input for guessing number
// 3) compare user input with computers number and show result
// const randomNumber = 13;
// random guess a value btwn 0.0 to 0.9
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber", type: "number", message: "Please guess a number between 1-10 : ",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
