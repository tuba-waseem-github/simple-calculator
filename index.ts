#! /usr/bin/env node

import inquirer from "inquirer";

const answere = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
if (answere.operator === "Addition"){
    console.log(answere.firstNumber + answere.secondNumber);
}  else if (answere.operator === "Subtraction") {
    console.log(answere.firstNumber - answere.secondNumber);
}  else if (answere.operator === "Multiplication"){
    console.log(answere.firstNumber * answere.secondNumber);
}  else if (answere.operator === "Division"){
    console.log(answere.firstNumber / answere.secondNumber);
}   else {
    console.log("select please valid operatotr")
}