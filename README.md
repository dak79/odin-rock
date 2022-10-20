# Rock Paper Scissor

## Live Preview
[Rock Paper Scissor](https://dak79.github.io/odin-rock/)


## Description
This project is part of [The Odin Project - Foundation Course](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
The goal of this web app is to get confident with browser console and some basic JavaScript, expecially with functions, some logic, a bit of DOM manipulation and a bit of event listeners.
In the first stage the game was without UI and playlable only from console. In the second sage (adding UI) the idea was experimenting with git branches and refactoring old code.

## Tecnologies
* HTML
* CSS
* JavaScript
* Git

## Assignement
### First Stage
* Start a new Git repo for your project. Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.

* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner.

* Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

* At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.

* Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful. Feel free to create more “helper” functions if you think it would be useful.

### Second Stage
* Set up a new branch on your previous Rock Paper Scissors repo. Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command git checkout -b rps-ui.

* In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. 

* Add a div for displaying results and change all of your console.logs into DOM methods.

* Display the running score, and announce a winner of the game once one player reaches 5 points.

* Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.