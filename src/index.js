import './styles.css';
import Board from './modules/leader-functions.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const leaderBoard = new Board();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  leaderBoard.addLeader();
});

refresh.addEventListener('click', (event) => {
  event.preventDefault();
  leaderBoard.reset();
});

leaderBoard.render();