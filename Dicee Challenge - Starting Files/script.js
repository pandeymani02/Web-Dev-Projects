var randomNumber = Math.floor(Math.random() * 6) + 1;
//console.log("Random number between 1 and 6: " + randomNumber);
/*window.onload = function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    var diceImageElement = document.getElementById("first");
    console.log(diceImageElement);
    diceImageElement.src = "./images/dice"+randomNumber+".png";
  };*/
  document.addEventListener("DOMContentLoaded", function() {
    var diceImageElements = document.querySelectorAll("img");
    diceImageElements.forEach(function(diceImageElement) {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      diceImageElement.src = "dice" + randomNumber + ".png";
    });
  });
  