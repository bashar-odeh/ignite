import { getGameSearchURL } from "../api";
import axios from "axios";

const searchAction = (game_name) => async (dispatch) => {
  dispatch({
    type: "searching",
  });
  const searchResult = await axios.get(getGameSearchURL(game_name));
  dispatch({
    type: "search",
    payload: searchResult.data.results,
  });
};

export default searchAction;
