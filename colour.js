
function getHSL(lightness) {
  var hue = 150;
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
  mainDiv.appendChild(boxDiv);

  var greyBox = document.createElement("div");
  greyBox.className = "box";
  greyBox.setAttribute("id", "greyBox" + i);
  greyBox.style.backgroundColor = 'darkgrey';
  answerDiv.appendChild(greyBox);
}

var arrayOfDivs = document.querySelectorAll(".box");
    for (var i = 0; i < arrayOfDivs.length; i++) {
      arrayOfDivs[i].addEventListener("click", function() {

      });
    }

// var clickedBoxColour;
// var arrayOfDivs = document.querySelectorAll(".box");
//     for (var i = 0; i < arrayOfDivs.length; i++) {
//       arrayOfDivs[i].addEventListener("click", function() {
//       clickedBox = this;
//       clickedBoxColour = clickedBox.style.backgroundColor;
//
//
//       if (clickedBox) {
//       for (var i = 0; i < arrayOfDivs.length; i++) {
//         arrayOfDivs[i].addEventListener("click", function() {
//         console.log(this);
//         // this.id.style.backgroundColor = 'green';
//         document.getElementById(this.id).style.backgroundColor = 'green';
//         console.log(this.id);
//         console.log(this);
//           clickedBox.style.backgroundColor = 'darkgrey';
//         });
//   }
// }
//
//     });
//
// }
//
//
//

  // greyBox.addEventListener("click", function(){
  //
  //   } else {
  //   // if (clickedBox){
  //     // clickedBox.style.backgroundColor = boxDiv.style.backgroundColor;
  //     // clickedBox.style.backgroundColor = this;
  //   // }
  //   }

  // });


//make loop to move colours around/else if
//have one div pre filled in in lower box line, lock this div
//made new function with different values - for other levels - change hues
//
