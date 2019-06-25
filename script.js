let p1btn = document.getElementById('p1');
let p2btn = document.getElementById('p2');
let resetBtn = document.getElementById('reset');
let p1Display = document.getElementById('p1Display');
let p2Display = document.getElementById('p2Display');
let numInput = document.querySelector('input[type=number]');
let winningScoreDisplay = document.querySelector('p span');
let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 5;

p1btn.addEventListener('click', function() {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      p1Display.classList.add('winner');
      gameOver = true;
    }
    p1Display.textContent = p1score;
  }
});
p2btn.addEventListener('click', function() {
  if(!gameOver) {
    p2score++;
      if(p2score === winningScore) {
        p2Display.classList.add('winner');
        gameOver = true;
      }
      p2Display.textContent = p2score;
  }
});

resetBtn.addEventListener('click', function() {
  reset();
});

function reset() {
  p1score = 0;
  p2score = 0;
  p1Display.textContent = p1score;
  p2Display.textContent = p2score;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change', function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});