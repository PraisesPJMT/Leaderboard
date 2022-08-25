import './styles.css';
import Board from './modules/leader-functions.js';
import renderLeader from './modules/leader-creations.js';
import { addLeaderError, addLeaderSuccess, fetchLeaderError } from './modules/messages-functions.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const leaderBoard = new Board();

const refreshBoard = () => {
  leaderBoard.reset()
    .then(async (response) => {
      const responseText = await response.text();
      renderLeader(responseText);
    })
    .catch((error) => {
      const errorMessage = `Error during fetch: ${error.message}`;
      fetchLeaderError(errorMessage);
    });
};

submit.addEventListener('click', (event) => {
  event.preventDefault();
  leaderBoard.addLeader()
    .then(async (response) => {
      let responseText = await response.json();
      responseText = responseText.result;
      refreshBoard();
      addLeaderSuccess(responseText);
    })
    .catch((error) => {
      const errorMessage = `Error during add: ${error.message}`;
      addLeaderError(errorMessage);
    });
});

refresh.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.leaderboard-message').style.display = 'none';
  refreshBoard();
});