//@ts-nocheck
import { getApiEndpoint } from './getApiEndpoint';

const apiConfig = {
  apiUrl: getApiEndpoint(),

  errorMessageFunction: (message) => {
    console.error(message);
  },
};

export default apiConfig;
