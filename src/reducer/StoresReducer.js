const initState = {
  StoresFetched: [],
  isLoadingStores: true,
};

const StoresReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_STORES":
      return {
        ...state,
        StoresFetched: action.payload,
        isLoadingStores: false,
      };
    case "LoadingStores":
      return { ...state, isLoadingStores: true };

    default:
      return state;
  }
};

export default StoresReducer;
