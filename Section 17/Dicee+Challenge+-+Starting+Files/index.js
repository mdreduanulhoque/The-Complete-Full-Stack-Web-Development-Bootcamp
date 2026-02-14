function shuffle(){
    var a = Math.floor((Math.random()*6)+1);
    var b = Math.floor((Math.random()*6)+1);

    if(a == 1){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice1.png";
    }else if(a == 2){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice2.png";
    }else if(a == 3){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice3.png";
    }else if(a == 4){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice4.png";
    }else if(a == 5){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice5.png";
    }else if(a == 6){
        var i1 = document.getElementsByClassName('img1')[0];
        i1.src = "./images/dice6.png";
    }




    if(b == 1){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice1.png";
    }else if(b == 2){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice2.png";
    }else if(b == 3){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice3.png";
    }else if(b == 4){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice4.png";
    }else if(b == 5){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice5.png";
    }else if(b == 6){
        var i2 = document.getElementsByClassName('img2')[0];
        i2.src = "./images/dice6.png";
    }


    if( a > b ){
        document.querySelector(".result").innerHTML = "Player 1 wins 🥳";
    }else if( a < b ){
        document.querySelector(".result").innerHTML = "Player 2 wins 🥳";
    }else{
        document.querySelector(".result").innerHTML = "Draw 🤝";
    }

}


function reset(){
    document.querySelector(".result").innerHTML = "Refresh Me";
    document.querySelector(".img1").src = "./images/initial.jpeg";
    document.querySelector(".img2").src = "./images/initial.jpeg";
}