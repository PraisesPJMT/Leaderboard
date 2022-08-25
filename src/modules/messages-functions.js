const addLeaderMessage = document.querySelector('.addleader-message');
const leaderboardMessage = document.querySelector('.leaderboard-message');

export const addLeaderSuccess = (responseText) => {
  addLeaderMessage.style.display = 'block';
  addLeaderMessage.classList.remove('red');
  addLeaderMessage.classList.add('green');
  addLeaderMessage.innerText = responseText;
  setTimeout(() => {
    addLeaderMessage.style.display = 'none';
    addLeaderMessage.innerText = '';
  }, 5000);
};

export const addLeaderError = (errorMessage) => {
  addLeaderMessage.style.display = 'block';
  addLeaderMessage.classList.remove('green');
  addLeaderMessage.classList.add('red');
  addLeaderMessage.innerText = errorMessage;
  setTimeout(() => {
    addLeaderMessage.style.display = 'none';
    addLeaderMessage.innerText = '';
  }, 10000);
};

export const fetchLeaderError = (errorMessage) => {
  leaderboardMessage.style.display = 'grid';
  leaderboardMessage.innerText = errorMessage;
};