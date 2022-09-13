// we are going to use event Listener here
// it is used to provide functionality to the buttons just like in java


// below line means whenever the first button is clicked then
// it will invoke the function..
// document.querySelectorAll("btn").addEventListener("click", HandleEvent);
//
// function HandleEvent()
// {
//   /// this function gets exectuted when the first button is clicked
//   alert("Button Clicked");
// }

/// how to make this for all buttons ? use loops

var NoDrums = document.querySelectorAll(".drum").length;

// for mouse interrupts

for (var i = 0; i < NoDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio("sounds/tom-1.mp3");
    //  audio.play();// this is called anonumous function.

    var selectedButton = this.innerHTML; // this keywords points to the buttons
    // which is pressed
    // with the help of 'this' keyword we will determine which button
    // is pressed..
    makeSound(selectedButton);
    animateButton(selectedButton); // to animate the button

  });
}

// for keyboard interrupts

document.addEventListener("keydown", function (event)
{
  makeSound(event.key);
  animateButton(event.key); // to animate the button
});

// to produce the desired sound when click or keyboard key is pressed..

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
    console.log(key);
    break;
  }
}

function animateButton(PressedKey)
{
  var activeButton = document.querySelector("."+PressedKey);
  activeButton.classList.add("pressed"); // to create that typical pressed effect

  setTimeout(function ()
{
  // to create a timeout after which effect at line 91 will be removed
  activeButton.classList.remove("pressed");
}, 100); // for 0.1 sec
}
