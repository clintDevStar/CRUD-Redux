import {
  fetchGamesPending,
  fetchGamesSuccess,
  fecthGamesError
} from "../actions/action-types";

function fetchGames() {
  return dispatch => {
    dispatch(fetchGamesPending());
    fetch("/api/games")
      .then(res => res.json())
      .then(res => {
        if (res.error) throw res.error;
        dispatch(fetchGamesSuccess(res.games));
        return res.games;
      })
      .catch(error => {
        dispatch(fecthGamesError(error));
      });
  };
}

export default fetchGames;
