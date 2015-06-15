// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

function getHSL(lightness) {
  var hue = 100;
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

var clickedBox;

for (var i = 1; i <= 5; i++) {
  var boxDiv =  document.createElement("div");
  boxDiv.className = "box";
  boxDiv.setAttribute("id", "box" + i);
  //or can do lightness += 5 --means the same thing
  boxDiv.style.backgroundColor = getHSL(lightnessArray[i]);
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
      clickedBox.style.backgroundColor = 'darkgrey';
    } else {
    // if (clickedBox){
      // clickedBox.style.backgroundColor = boxDiv.style.backgroundColor;
      // clickedBox.style.backgroundColor = this;
    }

  });
  answerDiv.appendChild(greyBox);

}

//make loop to move colours around/else if
//have one div pre filled in in lower box line, lock this div
//made new function with different values - for other levels - change hues
//
