import axios from "axios";
import { config } from "../../config";

export const getSheets = () => {
  return axios.get(`${config.backendLocal}/sheets`);
};
