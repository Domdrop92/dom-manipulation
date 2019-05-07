
var users = [];
//user object
// var user = {
//     name: 'Dominique',
//     hp: 50
// };
// console.log(user);

// var users = [];
// users.push(user); // how to add objects to the array
// console.log(users);

var userCount = 5;


// while ( users.length < userCount ){
//     var user = {};
// user.name = prompt('Enter user name: ');
// user.hp = prompt('Enter user hp:');
// users.push(user);
// }
// console.log(user);

for (var i = 0; i < userCount; i++){
    var user = {};
    user.name = prompt('Enter user name: ');
    user.hp = prompt('Enter user hp:');
    users.push(user);
}
console.log(users);
