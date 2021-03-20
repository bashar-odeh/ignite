import { combineReducers } from "redux";
// import all reducers
import gamesReducer from "./gamesReducer";
import gameDetailReducer from "./gameDetailReducer";
import searchReducer from "./searchReducer";
import gameSeriesReducer from "./gameSeriesReducer";
import StoresReducer from "./StoresReducer";
import singleStroeReducer from "./singleStroeReducer";
import allGamesReducer from "./allGamesReducer";
import storeGamesReducer from "./genersReducer";
import genersReducer from "./genersReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailReducer,
  search: searchReducer,
  series: gameSeriesReducer,
  stores: StoresReducer,
  singleStore: singleStroeReducer,
  storeGames: storeGamesReducer,
  allGames: allGamesReducer,
  geners: genersReducer,
});

export default rootReducer;
