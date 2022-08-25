import './styles.css';
import Board from './modules/leader-functions.js';
import renderLeader from './modules/leader-creations.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const leaderBoard = new Board();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  leaderBoard.addLeader();
});

refresh.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.leaderboard-message').style.display = 'none';
  leaderBoard.reset()
    .then(async (response) => {
      const responseText = await response.text();
      renderLeader(responseText);
    })
    .catch((error) => {
      const errorMessage = `Error during fetch: ${error.message}`;
      document.querySelector('.leaderboard-message').style.display = 'grid';
      document.querySelector('.leaderboard-message').innerText = errorMessage;
    });
});