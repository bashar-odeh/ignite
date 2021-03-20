const initstate = {
  gameSeries: [],
  gameSuggested: [],
  isLoadingTransfer: false,
};
const gameSeriesReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCHING_GAME_SERIES": {
      return {
        ...state,
        gameSeries: action.payload.dataSeries,
        gameSuggested: action.payload.dataSuggested,
        isLoadingTransfer: false,
      };
    }
    case "Loading":
      return { ...state, isLoadingTransfer: true };
    default: {
      return state;
    }
  }
};
export default gameSeriesReducer;
