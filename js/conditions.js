//if condition
var hour = 20;
// if (hour > 18) {
 //  console.log('class has started');
//}
 //if (hour < 21) {
  // console.log('continue class')
//}
if (hour> 18 && hour <21) {
    console.log('class hours')
} else if (hour > 0 && hour <4){
    console.log('sleep time');

} else {
    console.log('non class hours');
}



var minute = prompt('How many minutes past the hour?');
//switch condition 
switch (minute){
    case 0:
    console.log('hour has just begun');
    break;
    case 30:
    console.log('it is almost the next hour');
    break;
    default:
    console.log('waiting for the next hour');
}