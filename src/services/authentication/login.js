import axios from "axios";
import { config } from "../../config";
export async function login(password) {
  try {
    return axios.post(`${config.backendLocal}/auth/login`, {
      password: password,
    });
  } catch (error) {
    return error;
  }
}
