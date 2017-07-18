

var the = document.querySelector('body');

var borderTypes = ['solid', 'dashed', 'dotted'];

function clearOldDots(){
    var divsToRemove = document.querySelectorAll('div:not(#red)');


    divsToRemove.forEach(function(div) {
        the.removeChild(div);
    })
 }

function applyDots() {
var counter = 0;
while(counter < 15) {
    var thhe = document.createElement('div');

    var red = getRandomInt(0,255);
    var green = getRandomInt(0,255);
    var blue = getRandomInt(0,255);

    thhe.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
    thhe.style.borderStyle = borderTypes[getRandomInt(0,2)]


    var d = getRandomInt(0,255);
    var a = getRandomInt(0,255);
    var f = getRandomInt(0,255);

    thhe.style.borderColor = `rgb(${d}, ${a}, ${f}`;
    

    the.appendChild(thhe);

    counter += 1;

}

}

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}


var button = document.querySelector('div#red');

     button.addEventListener('click', function(){
         clearOldDots();
         applyDots();
     })


                                     



  















