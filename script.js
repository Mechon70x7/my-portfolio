//this will run when the page loads
console.log("Welcome to my porfolio");

//Po-up greeting
alert("Thanks for visiting my website, Omar Breff's Portfolio!");

//Example interacting with the User
let username = prompt("What's your name");
console.log("User's name is:", username);

//chage something on thge page
document.querySelector("h1").textContent = `welcome, ${username}!`;

function thankUser() {
    alert("Thank you for exploring my site!");
}