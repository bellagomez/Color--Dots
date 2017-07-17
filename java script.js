var the = document.querySelector('body');




var counter = 0;
while(counter < 4) {
    var thhe = document.createElement('div');

    var red = getRandomInt(0,255);
    var green = getRandomInt(0,255);
    var blue = getRandomInt(0,255);


    var d = getRandomInt(0,255);
    var a = getRandomInt(0,255);
    var f = getRandomInt(0,255);


thhe.style.borderColor = `rgb(${d}, ${a}, ${f}`;
    thhe.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
    the.appendChild(thhe);

    counter += 1;

}



function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}



                                     



