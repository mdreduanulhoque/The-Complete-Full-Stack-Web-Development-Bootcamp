
// For mouse

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", mouseClick);
}

function mouseClick(){
    this.classList.add("pressed");
    setTimeout(function () {
        this.classList.remove("pressed");
    },100);
    
    switch (this.innerHTML) {
        case "w":
            var tom4 = new Audio ("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "a":
            var tom3 = new Audio ("./sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "s":
            var tom2 = new Audio ("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var snare = new Audio ("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kickbass = new Audio ("./sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var crash = new Audio ("./sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log("Error 404 Occured");
            break;
    }

  }


// For Keyboard
  document.addEventListener("keypress", KeyPress);
function KeyPress(event){
    document.querySelector("." + event.key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + event.key).classList.remove("pressed");
    },100);
    switch (event.key) {
        case "w":
            var tom4 = new Audio ("./sounds/tom-4.mp3");
            tom4.play();
            
            break;

        case "a":
            var tom3 = new Audio ("./sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "s":
            var tom2 = new Audio ("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var snare = new Audio ("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kickbass = new Audio ("./sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var crash = new Audio ("./sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log("Error 404 Occured");
            break;
    }
}