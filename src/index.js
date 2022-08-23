import './styles.css';
import Board from './modules/leader-functions.js';

const submit = document.querySelector('.submit');
const leaderBoard = new Board();

submit.addEventListener('click', (event) => {
  event.preventDefault();
  leaderBoard.addLeader();
});

leaderBoard.render();