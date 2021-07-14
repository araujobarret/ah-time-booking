import axios from "axios";
import { getEnvironmentVariable } from "../utils/environment";

const url = getEnvironmentVariable("REACT_APP_API_URL");

const apiClient = axios.create({
  baseURL: url,
});

export default apiClient;
