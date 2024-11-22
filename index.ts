#! /usr/bin/env node
import inquirer from "inquirer";

async function runCalculator() {
    const cal = await inquirer.prompt([
        {
            message: "Enter your first number.",
            type: "number",
            name: "num1"
        },
        {
            message: "Enter your second number.",
            type: "number",
            name: "num2"
        },
        {
            message: "Select your operator.",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]);

    console.log(cal);
    if (cal.operator === "Addition") {
        console.log("Result:", cal.num1 + cal.num2);
    } else if (cal.operator === "Subtraction") {
        console.log("Result:", cal.num1 - cal.num2);
    } else if (cal.operator === "Multiplication") {
        console.log("Result:", cal.num1 * cal.num2);
    } else if (cal.operator === "Division") {
        if (cal.num2 !== 0) {
            console.log("Result:", cal.num1 / cal.num2);
        } else {
            console.log("Cannot divide by zero.");
        }
    }
}

runCalculator();
