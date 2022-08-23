const generateLeader = (name, score) => {
  const leader = document.createElement('li');
  const leaderName = document.createElement('span');
  const leaderScore = document.createElement('span');
  const colon = ' : ';
  leaderName.textContent = name;
  leaderScore.textContent = score;
  leader.appendChild(leaderName);
  leader.innerText += colon;
  leader.appendChild(leaderScore);
  return leader;
};

export default generateLeader;