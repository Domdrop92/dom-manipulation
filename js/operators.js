

//var age = 15,
var age = prompt('Enter your age:'),
    accompaniedByAdult = confirm('Are you accompanied by someone over 21?');
console.log({age, accompaniedByAdult})

if (age >= 18 && age < 21) {
    // if above statement is true
    if (accompaniedByAdult == true) {
        console.log('Allowed');
    } else {
        console.log('Denied');
    }
} else if (age >= 21){
    console.log('You are free!!');
} else {
    // if above statement is false
    console.log('Try again next year');
}


// ternary operation
(age >= 18 && age < 21) ?
    (accompaniedByAdult ?
        console.log('allowed') : console.log('denied')) :
    (age >= 21) ? 
        console.log('you are free') :
        console.log('age is not between 18 and 21');