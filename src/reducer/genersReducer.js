const initState = {
  genres: [],
  isLoadingGeners: true,
};

const genersReducer = (state = initState, action) => {
  switch (action.type) {
    case "GENERS":
      return { ...state, genres: action.payload, isLoadingGeners: false };
    case "LOADING_GENERS":
      return { ...state, isLoadingGeners: true };

    default:
      return state;
  }
};
export default genersReducer;
