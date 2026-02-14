

var buttonColors = ["red","green","blue","yellow"];
var gamePattern = [];
var userGamePattern = [];
var started = false;
var level = 0;


// Clicking start button
$("#start-btn").on("click",function(){
    start();
});

function start(){
    $(".game-board").addClass("active");
    $(".level-track").text("Level " + level);
    started = true;
    $("#start-btn").text("Restart");
    setTimeout(function(){
        nextSequence();
    },500);
    
}

// Clicking color buttons
$(".btn").click(function (){
    var userColor = $(this).attr("id");
    userGamePattern.push(userColor);
    playSound(userColor);
    animatePress(userColor);
    checkAns(userGamePattern.length-1);
});


// Checking Currect Sequence
function checkAns(currentLevel){
    if(gamePattern[currentLevel] === userGamePattern[currentLevel]){
        if(userGamePattern.length === gamePattern.length){
            level++;
            $(".level-track").text("Level " + level);
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
            playSound("wrong");
            $("game-board").addClass("game-over");
            setTimeout(function(){
                $("game-board").removeClass("game-over active");
            },1000);
            $(".level-track").text("Game over !! Score: " + level);
            $("#start-btn").text("Start");
            startOver();
    }
}


// Producing next sequence of color
function nextSequence(){
    userGamePattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

function animatePress(userColor){
    $("#" + userColor).addClass("pressed");
    setTimeout(function(){
        $("#" + userColor).removeClass("pressed");
    },100);
}

function playSound(userColor){
    var audio = new Audio("./assets/sounds/" + userColor + ".mp3");
    audio.play();
}

function startOver(){
    $(".game-board").removeClass("active");
    level = 0;
    gamePattern = [];
    started = false;
}