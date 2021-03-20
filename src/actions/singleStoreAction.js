import axios from "axios";
import { getStoreDetailsURL, getGameDetailsURL } from "../api";

const singleStoreAction = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_SINGLE_STORE",
  });
  const data = await axios.get(getStoreDetailsURL(id));
  //const data = await axios.get(getGameDetailsURL(id));
  dispatch({
    type: "GET_SINGLE_STORE",
    payload: data.data,
  });
};

export default singleStoreAction;
