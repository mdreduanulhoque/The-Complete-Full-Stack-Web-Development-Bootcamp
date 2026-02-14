$(".demo-btn").on("click", function() {
  var color = this.className.split(' ')[1];
  var audioDemo = new Audio("../assets/sounds/" + color + ".mp3");
  audioDemo.play();
});
