// Alert - shows a message
alert("Welcome to JavaScript!");

// Prompt - gets user input
let userName = prompt("What is your name?", "Guest");
console.log("User name:", userName);

// Confirm - yes/no confirmation
let isAdult = confirm("Are you 18 or older?");
console.log("Is adult?", isAdult);

// Complete example
let age = prompt("How old are you?", "18");
let verifiedAge = Number(age);

if (verifiedAge >= 18) {
    let proceed = confirm("You are " + verifiedAge + ". Continue?");
    if (proceed) {
        alert("Welcome!");
    } else {
        alert("Cancelled");
    }
} else {
    alert("Access denied!");
}