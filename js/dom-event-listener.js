var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';
//button 1//
btnUsingSelector.addEventListener('click', function () {
    console.log('Button was cicked from JS!');
});

btnUsingSelector.addEventListener('mouseover', function (event) {
    console.log(event);
    console.log(typeof event.target);

    var btnText = event.target.innerHTML;
    alert('Mouse over on the' + btnText + ' button.');
});

//button 2//
var cancelBtn = document.querySelector('.cancel-button');
cancelBtn.addEventListener('click', function () {
    var response = confirm('Are you sure you want to cancel?');
    console.log(response);

});

//add event to the document that captures any key that is typed/clicked on the keyboard and shows the key value//

document.addEventListener('keypress', function(event) {
    console.log(event.key);
    console.log(event.keyCode);
});

document.addEventListener('keyup', function(event) {
    console.log(event.key);
    console.log(event.keyCode);
});

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    console.log(event.keyCode);
});


//listen to scroll event on document
//console.log the position of the cursor on the document
document.addEventListener('scroll', function (event){
    console.log(event);
});