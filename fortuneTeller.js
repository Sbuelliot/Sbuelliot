let motherName = prompt("What is your mother's name?");
let streetName = prompt("What is the name of the street you grew up in?");
let favColour = prompt("What was your favourite colour as a child?");
let age = prompt("What is your current age?");
let number = prompt("Choose a number between 1 and 10");
let bestFriendYears = number;
let bestFriendName = motherName + streetName;
let marriageYears = Math.round(age / number);
let childrenNumber = age % number;
let hairDyeYears = age - number;
console.log("Your fortune is:");
console.log(`In ${bestFriendYears} years time you going to meet your best friend named ${bestFriendName}.`)
console.log(`You will get married in ${marriageYears} years and have ${childrenNumber} children.`);
console.log(`You will dye your hair in ${hairDyeYears} years.`);
