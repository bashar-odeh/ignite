import { getGameDetailsURL } from "../api";
import { getGameScreenshotsURL } from "../api";
import axios from "axios";
const gameDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: "Loading_Details",
  });
  const details = await axios.get(getGameDetailsURL(id));
  const screenshots = await axios.get(getGameScreenshotsURL(id));
  dispatch({
    type: "fetch_details",
    payload: {
      detail: details.data,
      screenshots: screenshots.data.results,
    },
  });
};

export default gameDetailsAction;
