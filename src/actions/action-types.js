const FETCH_GAMES_PENDING = "FETCH_GAMES_PENDING";
const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
const FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR";

function fetchGamesPending() {
  return {
    type: FETCH_GAMES_PENDING
  };
}

function fetchGamesSuccess(games) {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: games
  };
}

function fetchGamesError(error) {
  return {
    type: FETCH_GAMES_ERROR,
    payload: error
  };
}
