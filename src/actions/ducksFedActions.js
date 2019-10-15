import { postDucksFed, getDucksFedReports } from "../services/ducksFedService";

const postDucksFedAction = data => {
  return dispatch => {
    return postDucksFed(data)
      .then(res => {
        dispatch({
          type: "SUCESS_CREATED_RECORD",
          data: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FAILURE_CREATED_RECORD",
          error
        });
      });
  };
};

const getDucksFedReportsAction = () => {
  return dispatch => {
    return getDucksFedReports()
      .then(res => {
        dispatch({
          type: "SUCESS_GOT_RECORDS",
          data: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FAILURE_GOT_RECORDS",
          error
        });
      });
  };
};

const hideMessages = () => {
  return {
    type: "HIDE_MESSAGES"
  };
};

export { postDucksFedAction, getDucksFedReportsAction, hideMessages };
