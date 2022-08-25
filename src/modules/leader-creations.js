const leaderboard = document.querySelector('.leaderboard');

const generateLeader = (name, score) => {
  const leader = document.createElement('li');
  const leaderName = document.createElement('span');
  const leaderScore = document.createElement('span');
  leaderName.textContent = name;
  leaderScore.textContent = score;
  leader.className = 'leader';
  leader.appendChild(leaderName);
  leader.appendChild(leaderScore);
  return leader;
};

const renderLeader = (responseText) => {
  const leaderScores = JSON.parse(responseText);
  document.querySelectorAll('.leader').forEach((leader) => {
    leaderboard.removeChild(leader);
  });
  leaderScores.result.forEach((leader) => {
    leaderboard.appendChild(generateLeader(leader.user, leader.score));
  });
};

export default renderLeader;