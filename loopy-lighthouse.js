for (var count = 100; count >= 100 && count <= 200; count++) {
    if (((count % 3) === 0) && ((count % 4) === 0)) {
        console.log("LoopyLighthouse");
    } else if ((count % 3) === 0) {
        console.log("Loopy");
    } else if ((count % 4) === 0) {
        console.log("Lighthouse");
    } else {
        console.log(count);
    }
}


function ageCalculator(name, yearOfBirth, currentYear) {
    var x = currentYear - yearOfBirth;
    var age = (name + " is " + x + " years old.");
    return age;
}
console.log(ageCalculator("Ferdinand", 1988, 2015));