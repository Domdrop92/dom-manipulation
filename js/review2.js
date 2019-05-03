// var userName = prompt('what is your name?');

// if (isNaN(userName)) {
//   console.log(userName);

// } else {
//    console.log('That is not correct');
//    prompt('what is your name');

// }

var user = {};
var name = prompt('Enter name: ');
console.log({name});
console.log(!name);
console.log(isNaN(name));

// if (name === '' || name === ' ' || parseInt()){
//     alert('Endter Valid Name');
// } else {
//     user.name = name;
// }

if (name && isNaN(name)) {
    user.name = name;
} else {
    alert('Enter Valid Name');

}



// ! means not, or the opposite of what you are putting 
// ! is checking for false and !! is checking for true


if (name && isNaN(name) && !isExcluded) {
    user.name = name;
    var hp = prompt('Enter your hp:');
    console.log(!!hp);
    console.log(typeof hp);
    console.log(isNaN(parseInt(hp)));

    if (hp && !isNaN(hp)){
        user.power = arseInt(hp);
    } 
    else {
    alert('Enter valid hp');
    } 
    else {
        alert('Enter Valid Name');
    }
}