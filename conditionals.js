const raining = true;
const cold = false;

if (raining) {
    console.log("Dont forget your umberella!");
}

if (cold) {
    console.log("Make sure you pick out a scarf");

}

console.log("Now you are ready for outside.");

// if -- else if ------------------------------------

const temperature = 12;

if (temperature < 0) {
    console.log("Make sure you pick out a scarf");
} else if (temperature < 15) {
    console.log("Short sleeves wont cut it");
} else {
    console.log("Short sleeves are fine");
}

console.log("Now you are ready for outside");

// AND - &&  ------------------------------------------

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
    console.log("You are eligible to vote.");
}

// OR - || ------------------------------------------

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
}

// NOT - ! ----------------------------------------

if (!raining) {
    console.log("Leave your umbrella at home!");
}