var anchor = document.querySelector('a');
console.log(anchor);
var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

allAnchors[1].textContent = 'This text is set from 35 using Dom manipulation';
allAnchors[1].href = 'https://www.google.com';
allAnchors[1].target = '_blank' ; 


var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelecor = document.querySelector('para-1');
console.log(para1UsingSelector);
para1.style.color = 'orange';

