const inistState = {
  isSearching: false,
  Searchedgames: [],
};

const searchReducer = (state = inistState, actoin) => {
  switch (actoin.type) {
    case "search":
      return { ...state, isSearching: true, Searchedgames: actoin.payload };
    case "searching":
      return { ...state, isSearching: false };
    case "Clear_Search":
      return { ...state, Searchedgames: [], isSearching: false };
    default:
      return state;
  }
};

export default searchReducer;
