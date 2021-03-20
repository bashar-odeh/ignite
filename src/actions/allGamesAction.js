import axios from "axios";
import { getAllGameURL } from "../api";
const allGamesAction = (url) => async (dispatch) => {
  dispatch({ type: "LOADING_ALL_GAMES" });

  let data = await axios.get(url);
  let nextPage = data.data.next;
  let previousPage = data.data.previous;
  dispatch({
    type: "FETCHING_ALL_GAMES",
    payload: {
      mainData: data.data.results,
      nextPage: nextPage,
      previousPage: previousPage,
    },
  });
};

export default allGamesAction;
