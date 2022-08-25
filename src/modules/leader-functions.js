class Board {
  addLeader = () => {
    const name = document.querySelector('.name').value;
    const score = Number(document.querySelector('.score').value);
    if (name.length > 1 && score) {
      document.querySelector('.name').value = '';
      document.querySelector('.score').value = '';
    }
  }

  reset = async () => {
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ncOyTNzzO044sLTLb55e/scores/';
    const request = new Request(requestURL);

    const response = await fetch(request);
    return response;
  }
}

export default Board;