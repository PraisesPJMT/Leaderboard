import generateLeader from './leader-creations.js';

const leaderboard = document.querySelector('.leaderboard');
const leaderCatalogue = JSON.parse(localStorage.getItem('leaderCatalogue')) || [];

class Board {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addLeader = () => {
    const name = document.querySelector('.name').value;
    const score = Number(document.querySelector('.score').value);
    const id = leaderCatalogue.length + 1;
    if (name.length > 1 && score) {
      leaderCatalogue.push({ name, score, id });
      document.querySelector('.name').value = '';
      document.querySelector('.score').value = '';
      this.render();
      this.saveRecord();
    }
  }

  render = () => {
    leaderboard.innerText = '';
    leaderCatalogue.forEach((leader) => {
      leaderboard.appendChild(generateLeader(leader.name, leader.score));
    });
  };

  saveRecord = () => {
    localStorage.setItem('leaderCatalogue', JSON.stringify(leaderCatalogue));
  }
}

export default Board;