const initialState = {
  noOfDucks: ""
};

const ducksFedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state
      };
    default:
      return initialState;
  }
};

export default ducksFedReducer;
