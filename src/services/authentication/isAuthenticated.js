import axios from "axios";
import { config } from "../../config";

export async function isAuthenticated(token) {
  try {
    const response = await axios.get(
      `${config.backendLocal}/auth/verify/${token}`
    );

    return response;
  } catch (error) {
    return error.message;
  }
}
