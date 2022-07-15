let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let restart = document.querySelector(".restart");
let display = document.querySelector(".display");
let playerX = document.querySelector(".playerX");
let playerO = document.querySelector(".playerO");
let again = document.querySelector(".again");

  let count = 1;
let gameover = "";
let current = "";
let currentpl = 0;
let btn1 = "";
let btn2 = "";
let btn3 = "";
let btn4 = "";
let btn5 = "";
let btn6 = "";
let btn7 = "";
let btn8 = "";
let btn9 = "";
let score1 = 0;
let score2 = 0;
let nextplayer = 0;

function reset() {
  document.getElementById("button-1").innerHTML = "";
  document.getElementById("button-2").innerHTML = "";
  document.getElementById("button-3").innerHTML = "";
  document.getElementById("button-4").innerHTML = "";
  document.getElementById("button-5").innerHTML = "";
  document.getElementById("button-6").innerHTML = "";
  document.getElementById("button-7").innerHTML = "";
  document.getElementById("button-8").innerHTML = "";
  document.getElementById("button-9").innerHTML = "";
  playerX.classList.add('border')
  btn1 = "";
  btn2 = "";
  btn3 = "";
  btn4 = "";
  btn5 = "";
  btn6 = "";
  btn7 = "";
  btn8 = "";
  btn9 = "";
  count = 1;
  gameover = "";
  current = "";
  let nextplayer = "";
  document.getElementById("displaycurrentplayer").innerHTML = "X";
  document.getElementById("wins").innerHTML = "Turn";
  again.innerHTML = ''
}


restart.addEventListener('click',function () {
reset()
let score1 = 0;
let score2 = 0;
document.getElementById("score1").innerHTML = '-'
document.getElementById("score2").innerHTML = '-'
})

again.addEventListener("click", function () {
 reset()
});

function PermutationOne(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button1.style.color = "lime";
  button2.style.color = "lime";
  button3.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
   score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationTwo(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button4.style.color = "lime";
  button5.style.color = "lime";
  button6.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationThree(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button7.style.color = "lime";
  button8.style.color = "lime";
  button9.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationFour(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button3.style.color = "lime";
  button5.style.color = "lime";
  button7.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationFive(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button1.style.color = "lime";
  button4.style.color = "lime";
  button7.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationSix(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button2.style.color = "lime";
  button5.style.color = "lime";
  button8.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationSeven(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button3.style.color = "lime";
  button6.style.color = "lime";
  button9.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function PermutationEight(score, player) {
  document.getElementById("displaycurrentplayer").innerHTML =
    "player " + currentpl + " wins";
  button1.style.color = "lime";
  button5.style.color = "lime";
  button9.style.color = "lime";
  gameover = "winner";
  again.innerHTML = 'PLAY AGAIN'
  if (player === 1) {
    score1 = score += 1;
    document.getElementById("score1").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "X";
        document.getElementById("wins").innerHTML = "Wins";
  }
  if (player === 2) {
    score2 = score += 1;
    document.getElementById("score2").innerHTML = score;
      document.getElementById("displaycurrentplayer").innerHTML = "O";
        document.getElementById("wins").innerHTML =
    "Wins";
  }
}

function forDraw(){
    document.getElementById("displaycurrentplayer").innerHTML = "Tie";
    document.getElementById("wins").innerHTML = "";
    again.innerHTML = 'PLAY AGAIN';
  gameover = "draw";
}



button1.addEventListener("click", function () {
  
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn1 != "x" &&
    btn1 != "o"
  ) {
    current = count % 2 === 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button1.style.color = 'black';
    }
    else if(current === 'o'){
      button1.style.color = 'white';
    }
    document.getElementById("button-1").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }
    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn1 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1, 1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1, 1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1, 1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1, 1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1, 1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1, 1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1, 1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1, 1);
      } else if (count == 10) {
       forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2, 2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2, 2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2, 2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2, 2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2, 2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2, 2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2, 2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2, 2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});


document.querySelector(".button2").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn2 != "x" &&
    btn2 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button2.style.color = 'black';
    }
    else if(current === 'o'){
      button2.style.color = 'white';
    }
    document.getElementById("button-2").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn2 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1, 1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1, 1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1, 1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1, 1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1, 1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1, 1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1, 1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1, 1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button3").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn3 != "x" &&
    btn3 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button3.style.color = 'black';
    }
    else if(current === 'o'){
      button3.style.color = 'white';
    }
    document.getElementById("button-3").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn3 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button4").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn4 != "x" &&
    btn4 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button4.style.color = 'black';
    }
    else if(current === 'o'){
      button4.style.color = 'white';
    }
    document.getElementById("button-4").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn4 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button5").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn5 != "x" &&
    btn5 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button5.style.color = 'black';
    }
    else if(current === 'o'){
      button5.style.color = 'white';
    }
    document.getElementById("button-5").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn5 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button6").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn6 != "x" &&
    btn6 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button6.style.color = 'black';
    }
    else if(current === 'o'){
      button6.style.color = 'white';
    }
    document.getElementById("button-6").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn6 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button7").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn7 != "x" &&
    btn7 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button7.style.color = 'black';
    }
    else if(current === 'o'){
      button7.style.color = 'white';
    }
    document.getElementById("button-7").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn7 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button8").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn8 != "x" &&
    btn8 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button8.style.color = 'black';
    }
    else if(current === 'o'){
      button8.style.color = 'white';
    }
    document.getElementById("button-8").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn8 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});

document.querySelector(".button9").addEventListener("click", function () {
  if (
    gameover != "winner" &&
    gameover != "draw" &&
    btn9 != "x" &&
    btn9 != "o"
  ) {
    current = count % 2 == 1 ? "x" : "o";
    currentpl = count % 2 == 1 ? 1 : 2;
    if(current === 'x'){
      button9.style.color = 'black';
    }
    else if(current === 'o'){
      button9.style.color = 'white';
    }
    document.getElementById("button-9").innerHTML = current;
    nextplayer = currentpl == 1 ? 'O' : 'X';
    if (nextplayer === 'X') {
      playerX.classList.add('border')
      playerO.classList.remove('border')
    }
    else if(nextplayer === 'O') {
      playerO.classList.add('border')
      playerX.classList.remove('border')
    }

    document.getElementById("displaycurrentplayer").innerHTML = nextplayer;
    btn9 = current;
    count++;

    if (current == "x") {
      if (btn1 == "x" && btn2 == "x" && btn3 == "x") {
        PermutationOne(score1,1);
      }
      if (btn4 == "x" && btn5 == "x" && btn6 == "x") {
        PermutationTwo(score1,1);
      }
      if (btn7 == "x" && btn8 == "x" && btn9 == "x") {
        PermutationThree(score1,1);
      }
      if (btn3 == "x" && btn5 == "x" && btn7 == "x") {
        PermutationFour(score1,1);
      }
      if (btn1 == "x" && btn4 == "x" && btn7 == "x") {
        PermutationFive(score1,1);
      }
      if (btn2 == "x" && btn5 == "x" && btn8 == "x") {
        PermutationSix(score1,1);
      }
      if (btn3 == "x" && btn6 == "x" && btn9 == "x") {
        PermutationSeven(score1,1);
      }
      if (btn1 == "x" && btn5 == "x" && btn9 == "x") {
        PermutationEight(score1,1);
      } else if (count == 10) {
        forDraw();
      }
    } else if (current == "o") {
      if (btn1 == "o" && btn2 == "o" && btn3 == "o") {
        PermutationOne(score2,2);
      }
      if (btn4 == "o" && btn5 == "o" && btn6 == "o") {
        PermutationTwo(score2,2);
      }
      if (btn7 == "o" && btn8 == "o" && btn9 == "o") {
        PermutationThree(score2,2);
      }
      if (btn3 == "o" && btn5 == "o" && btn7 == "o") {
        PermutationFour(score2,2);
      }
      if (btn1 == "o" && btn4 == "o" && btn7 == "o") {
        PermutationFive(score2,2);
      }
      if (btn2 == "o" && btn5 == "o" && btn8 == "o") {
        PermutationSix(score2,2);
      }
      if (btn3 == "o" && btn6 == "o" && btn9 == "o") {
        PermutationSeven(score2,2);
      }
      if (btn1 == "o" && btn5 == "o" && btn9 == "o") {
        PermutationEight(score2,2);
      } else if (count == 10) {
        forDraw();
      }
    }
  }
});
