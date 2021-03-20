const initState = {
  storeData: [],
  isLoadingSingleStore: true,
};
const singleStroeReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SINGLE_STORE":
      return {
        ...state,
        storeData: action.payload,
        isLoadingSingleStore: false,
      };
    case "LOADING_SINGLE_STORE":
      return { ...state, isLoadingSingleStore: true };

    default:
      return state;
  }
};

export default singleStroeReducer;
