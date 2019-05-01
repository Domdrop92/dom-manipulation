//array of fruit

var fruits = [ 'apple' , 'orange' , 'banana' , 'pear' , 'blueberry' ];
console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
//console.log(fruits[4]);

//for loops
//for (var i = 0; i < 4 ; i++ ) {
 //   console.log(fruits[i]);
//}

// do while
var index =0;
//do {
//console.log(fruits[index]);
//index++;
//} while (index < fruits.length);

// while
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

//for in 
fruits.foo = 'test';
for (var i in fruits){
    console.log(i);
}

//for of
for (var i of fruits) {
    console.log(i);
}