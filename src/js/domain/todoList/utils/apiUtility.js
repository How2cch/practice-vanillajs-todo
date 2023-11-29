import { apiClient } from "../api/todoApiClient";
import { apiClientMock } from "../api/todoApiClientMock";

export const getApiUtility = (isDev) => {
  if (isDev) {
    return apiClientMock;
  }
  return apiClient;
};