
// My Name
let name = "Edward Hart";

// Number of States
const numOfStates = 50;

// Sum of Addition
let sum = 5 + 4;

// Back of line
let firstLetter = prompt("What is your name?");

if (firstLetter.charCodeAt(0) <= 76){
    alert("Next!");
}   else {
    alert("Back of the line!");
};


// Hello World Function
function sayHello() {
    alert("Hello World!");
}

sayHello();

// Check Age Function
function checkAge(name, age) {
    if(age < 21){
        alert("Sorry " + name + " you are not old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// Favorite Veggies
let veggies = ["Carrots", "Celery", "Broccoli"];

for(i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
};

// Array of Strangers
let strangers = [
    {
        name: "Teddy Bear",
        age: 40
    },
    {
        name: "Willie Taggert",
        age: 23
    },
    {
        name: "Booby Miles",
        age: 18
    },
    {
        name: "Theresa Adams",
        age: 20
    },
    {
        name: "Chester Danger",
        age: 22
    },
];

// The checkAge for loop
for(i = 0; i < strangers.length; i++){
    if(strangers[i].age < 21){
        alert("Sorry " + strangers[i].name + " you are not old enough to visit.");
    }
};

// The getLengthFunction
function getLength(str){
    return str.length
}
// Prints out number of characters
let phrase = getLength("Hello World");
console.log(phrase);

// Finds odd or even
if(phrase % 2 === 0){
    console.log("The world is nice and even");
 } else {
        console.log("The world is odd")
    }


