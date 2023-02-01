const urlParams = new URLSearchParams(window.location.search);
const testGameOver = urlParams.get('testGameOver') == 1;
const testBlink = urlParams.get('testBlink') == 1;

const endDate = new Date(2023, 2, 10, 17, 30);
const refreshMs = 12;

const countdownDiv = document.getElementById('countdown');
const countdownContainerDiv = document.getElementById('countdown-container');

setInterval(refresh, refreshMs);

function refresh() {
  let date = new Date();
  let diff = endDate - date;

  if (diff > 0 && !testGameOver) {    

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    var mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    var seconds = Math.floor(diff / 1000);
    diff -= seconds * 1000;

    countdownDiv.innerHTML = `<p>${days} d<br />${hours} h<br />${mins} m<br />${seconds} s<br />${diff} ms</p>`;

    countdownContainerDiv.classList.remove('hide')
    countdownContainerDiv.classList.add('show');

    if(testBlink || days < 1){
      document.body.classList.add('alert');
    }

  } else {
    countdownContainerDiv.classList.remove('show')
    countdownContainerDiv.classList.add('hide');

    const gameOverDiv = document.getElementById('game-over');
    gameOverDiv.classList.remove('hide')
    gameOverDiv.classList.add('show');
  }
}