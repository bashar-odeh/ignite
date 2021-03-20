import axios from "axios";

const geners = () => async (dispatch) => {
  dispatch({ type: "LOADING_GENERS" });
  let data = await axios.get("https://api.rawg.io/api/genres");
  dispatch({ type: "GENERS", payload: data.data.results });
};

export default geners;
