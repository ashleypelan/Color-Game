function getHSL(lightness) {
  var hue = 10;
  var saturation = "100%";

  var string = "hsl("+ hue + ", " + saturation + ", " + lightness + "%)";
  return string;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var mainDiv = document.getElementById("main");
var answerDiv = document.getElementById("answer");
var lightness = getRandomInt(8, 50);
var lightnessArray = [lightness, lightness + 8, lightness + 16, lightness + 24,
                      lightness + 32, lightness + 40];

shuffle(lightnessArray);

//try changing all box/divs to have the same name and loop through them to change values

var clickedBox;
var box = document.getElementsByClassName("box");
for (var i = 1; i <= 5; i++) {
  var boxDiv =  document.createElement("div");
  boxDiv.className = "box";
  boxDiv.setAttribute("id", "box" + i);
  //or can do lightness += 5 --means the same thing
  boxDiv.style.backgroundColor = getHSL(lightnessArray[i]);
  // document.getElementsByClassName("box")[i];
  boxDiv.addEventListener("click", function() {
    clickedBox = this;
  });
  mainDiv.appendChild(boxDiv);

  var greyBox = document.createElement("div");
  greyBox.className = "box";
  greyBox.setAttribute("id", "greyBox" + i);
  greyBox.style.backgroundColor = 'darkgrey';
  greyBox.addEventListener("click", function(){
      if (clickedBox) {
      this.style.backgroundColor = clickedBox.style.backgroundColor;
      this.setAttribute("id", "box" + i++);
      clickedBox.style.backgroundColor = 'darkgrey';
      clickedBox.setAttribute("id", "box" + i++);
      clickedBox = null;
    } else {
      this.style.backgroundColor = clickedBox.style.backgroundColor;

    }

  });
  answerDiv.appendChild(greyBox);

}

var box = getElementById("box");
box.addEventListener("click", function() {
    while (clickedBox == boxDiv) {
      this.style.backgroundColor = clickedBox.style.backgroundColor;
      this.setAttribute("id", "box" + i++);
      clickedBox.style.backgroundColor = box.style.backgroundColor;
      clickedBox.setAttribute("id", "box" + i++);
      // clickedBox = null;
    }
});

//
// box[i].addEventListener("click", function() {
//   alert(box[i]);
//   if (clickedBox = this;) {
//
//   } else ( ) {
//
//   }
// });


//then do the clicking and listening
// hsl(0, 0%, 66%) darkgrey hsl
//make loop between darkgrey hsl and not to continue clicks
//make loop to move colours around/else if
//have one div pre filled in in lower box line, lock this div
//made new function with different values - for other levels - change hues
