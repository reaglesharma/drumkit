function makeSound(key) {
  switch (key) {
    case "w":
      var action = new Audio("sounds/tom-1.mp3");
      action.play();
      break;
    case "a":
      var action = new Audio("sounds/tom-2.mp3");
      action.play();
      break;
    case "s":
      var action = new Audio("sounds/tom-3.mp3");
      action.play();
      break;
    case "d":
      var action = new Audio("sounds/tom-4.mp3");
      action.play();
      break;
    case "j":
      var action = new Audio("sounds/snare.mp3");
      action.play();
      break;
    case "k":
      var action = new Audio("sounds/crash.mp3");
      action.play();
      break;
    case "l":
      var action = new Audio("sounds/kick-bass.mp3");
      action.play();
      break;
    default:
      break;
  }
}
//for registering the clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
//for registering the key presses
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//button animations

function buttonAnimation(animationkey) {
  var action = document
    .querySelector("." + animationkey)
    .classList.toggle("pressed");

  setTimeout(function () {
    document.querySelector("." + animationkey).classList.remove("pressed");
  }, 100);
}
