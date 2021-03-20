const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  isLoading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        isLoading: false,
      };
    case "Loading_Games": {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
};

export default gamesReducer;
