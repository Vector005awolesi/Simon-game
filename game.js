$("html").on("keypress", function (event) {
  var startKey = event.key;
  if (startKey === "a" || startKey === "A") {
    gameInit()
  } else {
  }
});
function gameInit() {
  var redBtn = $("div.btn.red");
  var greenBtn = $("div.btn.green");
  var yellowBtn = $("div.btn.yellow");
  var blueBtn = $("div.btn.blue");
  var allBtn = $("div[type='button']");
  var gamePattern = [];

  function nextSequence() {
    var colors = ["red", "blue", "green", "yellow"];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = colors[randomNumber];
    console.log(randomColor);
    gamePattern.push(randomColor);
    var currentBtn = $(`#${randomColor}`);
    currentBtn.click(()=>{alert("clicked")})
  }
  nextSequence()
}
