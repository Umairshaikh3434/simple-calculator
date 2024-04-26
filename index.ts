#! /usr/bin/env node 

import inquirer from "inquirer"

const  answer = await inquirer.prompt([{message: "Enter first number", type: "number", name: "firstNumber" }, 
{message:"enter second number", type: "number", name: "secondNumber"},
{message: "select one of the operators to perform operation",
type: "list",
name: "operator",
choices: ["Addition", "subtraction", "Multipication", "Division"],
}

]);


console.log(answer);

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multipication") {
    console.log(answer.firstNumber * answer.secondNumber)
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber)
}