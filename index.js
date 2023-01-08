#! /user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow("Welcme to the Calculator");
    await sleep();
    rainbow.stop();
}
await welcome();
async function askquestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "What operation do you want to perform",
            choices: ["Addition", "Subraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your First Number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your Second Number"
        }
    ]);
    if (answers.operator === "Addition") {
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator === "Subraction") {
        console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator === "Multiplication") {
        console.log(chalk.bgGreenBright(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator === "Division") {
        console.log(chalk.yellowBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else {
        return "Invalid";
    }
}
async function startAgain() {
    do {
        await askquestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.bgYellowBright("Do you want to rstart y/n?")
        });
    } while (again.restart === "y");
}
startAgain();
