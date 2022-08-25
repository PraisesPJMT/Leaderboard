class Board {
  addLeader = async () => {
    const nameValue = document.querySelector('.name').value;
    const scoreValue = Number(document.querySelector('.score').value);
    if (nameValue.length > 1 && scoreValue) {
      document.querySelector('.name').value = '';
      document.querySelector('.score').value = '';
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/deWz4CDgFZRzm2GUNbfR/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: nameValue,
            score: scoreValue,
          }),
        },
      );
      return response;
    }
    return (0);
  }

  reset = async () => {
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/deWz4CDgFZRzm2GUNbfR/scores/';
    const request = new Request(requestURL);
    const response = await fetch(request);
    return response;
  }
}

export default Board;