//@ts-nocheck
import qs from 'qs';

import getAuth0Client from 'services/auth0/getAuth0Client';

import config from './config';

export const generateOptions = async ({
  method, path, query, body, file = false, json = true, upload = false, error,
}) => {
  if (!upload && body) body = JSON.stringify(body);

  const Auth0Client = await getAuth0Client;
  const accessToken = await Auth0Client.getTokenSilently();

  return {
    path: `${config.apiUrl}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
    options: {
      headers: {
        ...!upload ? { 'Content-Type': 'application/json' } : {},
        Authorization: 'Bearer ' + accessToken,
      },
      method,
      ...(body ? { body } : {}),
    },
    file,
    json,
    errorConfig: error,
  };
};
