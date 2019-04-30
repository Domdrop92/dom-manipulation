//array of fruit

var fruits = [ 'apple' , 'orange' , 'banana' , 'pear' , 'blueberry' ];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//for loops
for (var i = 0; i < 4 ; i++ ) {
    console.log(fruits[i]);
}

// do while
var index =0;
do {
console.log(fruits[index]);
index++;
}
while (index < fruits.length);