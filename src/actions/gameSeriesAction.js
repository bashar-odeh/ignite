import axios from "axios";
import { getGameSeriesURL, getGameSuggetedURL } from "../api";

const gameSeriesAction = (id) => async (dispatch) => {
  const dataSeries = await axios.get(getGameSeriesURL(id));
  const dataSuggested = await axios.get(getGameSuggetedURL(id));
  dispatch({
    type: "FETCHING_GAME_SERIES",
    payload: {
      dataSeries: dataSeries.data.results,
      dataSuggested: dataSuggested.data.results,
    },
  });
};

export default gameSeriesAction;
