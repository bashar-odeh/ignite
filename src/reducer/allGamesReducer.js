const initState = {
  allGames: [],
  isLoadingAllGames: true,
  nextPage: null,
  previousPage: null,
};

const allGamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_GAMES":
      return {
        ...state,
        allGames: action.payload.mainData,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
        isLoadingAllGames: false,
      };
    case "LOADING_ALL_GAMES":
      return { ...state, isLoadingAllGames: true };
    case "emptyAllGames":
      return { ...state, allGames: [], isLoadingAllGames: true };

    default:
      return state;
  }
};
export default allGamesReducer;
