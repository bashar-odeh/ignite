import axios from "axios";
import { getStoresURL } from "../api";

const storesAction = () => async (dispatch) => {
  dispatch({
    type: "LoadingStores",
  });
  let data = await axios.get(getStoresURL());
  dispatch({
    type: "FETCH_STORES",
    payload: data.data.results,
  });
};

export default storesAction;
