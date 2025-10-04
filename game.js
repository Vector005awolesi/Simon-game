
var allBtn = $("div[type='button']");
var gamePattern = [];
var userClickedPattern = [];
var colors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];

  console.log(randomColor);
  gamePattern.push(randomColor);
  
  var randomBtn = $(`#${randomColor}`);
  randomBtn.fadeIn(100).fadeOut(100).fadeIn(100);
  var sound = new Audio(`sounds/${randomColor}.mp3`);
  sound.play();
  allBtn.on("click", function () {
    let id = $(this).attr("id");
    userClickedPattern.push(id);
    console.log(userClickedPattern);
  });
}
nextSequence();
