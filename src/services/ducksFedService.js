import axios from "axios";
import { resolve, reject } from "promise";

const postDucksFed = data => {
  return axios({
    method: "post",
    url: "http://5da534fc57f48b0014fba584.mockapi.io/api/ducksReport",
    data
  })
    .then(response => {
      return resolve(response);
    })
    .catch(error => {
      return reject(error);
    });
};

const getDucksFedReports = () => {
  return axios({
    method: "get",
    url: "http://5da534fc57f48b0014fba584.mockapi.io/api/ducksReport"
  })
    .then(response => {
      return resolve(response);
    })
    .catch(error => {
      return reject(error);
    });
};

export { postDucksFed, getDucksFedReports };
