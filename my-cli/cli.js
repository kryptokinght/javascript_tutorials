#!/usr/bin/env node


//dependencies
const program = require('commander');
const { prompt } = require('inquirer');


//prompt questions for fullName
const Nameq = [
	{
		type: "input", 
		name: "firstName",
		message: "Your first Name:"
	},
	{
		type: "input",
		name: "lastName",
		message: "Your last Name:"
	}
];


//CLI-info
program
	.version("1.0.0")
	.description("A tutorial CLI tool")


/************COMMANDS***************/
//print command
program
	.command("print")
	.alias('p')
	.description("Prints the welcome string")
	.action(() => {
		console.info("Welcome to my CLI tool");
	});

//get current time command
program
	.command("getTime")
	.alias('t')
	.description("Get the current date and time")
	.action(() => {
		console.info("\n");
		console.info(new Date());
	});

/*****print my name command*****/

/*program
	.command("name <firstName> <lastName>")
	.alias('n')
	.description("Prints your entered full name")
	.action((firstName, lastName) => {
		console.info("\n");
		console.info("Hello, Mr/Mrs. " + firstName + " " + lastName);
	});
*/
program
	.command("name")
	.alias('n')
	.description("Prints your entered full name")
	.action(() => {
		prompt(Nameq).then(answers => {
			console.info("\n");
			console.info("Hello, Mr/Mrs. " + answers.firstName + " " + answers.lastName);
		})
	});


program.parse(process.argv);
