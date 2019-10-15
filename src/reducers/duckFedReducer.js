const initialState = {
  ducksFedRecords: null,
  errorMessage: null,
  sucessMessage: null
};

const ducksFedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCESS_CREATED_RECORD":
      return {
        ...state,
        sucessMessage: "Record created sucessfully"
      };
    case "FAILURE_CREATED_RECORD":
      return {
        ...state,
        errorMessage: "Record doesn't created"
      };
    case "HIDE_MESSAGES":
      return {
        ...state,
        errorMessage: null,
        sucessMessage: null
      };
    case "SUCESS_GOT_RECORDS":
      return {
        ...state,
        ducksFedRecords: action.data
      };
    case "FAILURE_GOT_RECORDS":
      return {
        ...state,
        errorMessage: "Unable to fetch records"
      };
    default:
      return initialState;
  }
};

export default ducksFedReducer;
