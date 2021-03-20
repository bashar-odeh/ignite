const initState = {
  game: {},
  screenShots: {},
  isLoading: true,
};

const gameDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "fetch_details": {
      return {
        ...state,
        game: action.payload.detail,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    }

    case "Loading_Details": {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default gameDetailReducer;
