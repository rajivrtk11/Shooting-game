let pOneBtn = document.querySelector('.p-1');
let pTwoBtn = document.querySelector('.p-2');

let pOnescore = document.querySelector('.score-1');
let pTwoscore = document.querySelector('.score-2');

let scoreOne = document.querySelector(".leader-board-1");
let scoreTwo = document.querySelector(".leader-board-2");

// let gameOver = document.querySelector('.game-over')
let p1Score = 100;
let p2Score = 100;

let p1Won = 0;
let p2Won = 0;

// for player one 
pOneBtn.addEventListener('click', function() {
    let ball = document.createElement("div");
    ball.classList.add("ball-1");
    ball.classList.add("ball-animate");
    document.body.appendChild(ball);

    setTimeout(function() {
      ball.remove();
      pTwoscore.innerHTML = p2Score-5;
      p2Score -= 5;
      
      if(p2Score == 0){
        p1Won += 1;
        p2Score = 100;
        scoreOne.innerHTML = p1Won;
      }

      if(p1Won + p2Won == 5){
        if(p1Won > p2Won){
          let game_over = document.createElement("div");
          game_over.classList.add("game-over");
          let text = document.createTextNode("Player-1 win");
          game_over.appendChild(text);

         
          document.body.appendChild(game_over);
          // console.log("winner is p1", p1Won);
        }
        else{
          let game_over = document.createElement("div");
          game_over.classList.add("game-over");
          let text = document.createTextNode("Player-2 win");
          game_over.appendChild(text);

         
          document.body.appendChild(game_over);
          console.log("winner is p2", p2Won);
        }
      }
    }, 1000)
    
    

})

// for player two button
pTwoBtn.addEventListener('click', function() {
    let ball = document.createElement("div");
    ball.classList.add("ball-2");
    // ball.classList.add("ball-animate");
    document.body.appendChild(ball);

    setTimeout(function() {
      ball.remove();
      pOnescore.innerHTML = p1Score-5;
      p1Score -= 5;


      if(p1Score == 0){
        p2Won += 1;
        p1Score = 100;
        scoreTwo.innerHTML = p2Won;
      }

      if(p1Won + p2Won == 5){
        if(p1Won > p2Won){
          let game_over = document.createElement("div");
          game_over.classList.add("game-over");
          let text = document.createTextNode("Player-1 win");
          game_over.appendChild(text);

         
          document.body.appendChild(game_over);
        }
        else{
          let game_over = document.createElement("div");
          game_over.classList.add("game-over");
          let text = document.createTextNode("Player-2 win");
          game_over.appendChild(text);

         
          document.body.appendChild(game_over);
        }
      }
      
    }, 1000)
    
    

})