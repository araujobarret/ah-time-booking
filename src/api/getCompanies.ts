import apiClient from "./apiClient";
import { Company } from "../types/interfaces";
import { getEnvironmentVariable } from "../utils/environment";

const path = getEnvironmentVariable("REACT_APP_API_COMPANIES_PATH");

const getCompanies = async (): Promise<Company[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { data } = await apiClient.get<Company[]>(path);
    return data;
  } catch (e) {
    throw e;
  }
};

export default getCompanies;
