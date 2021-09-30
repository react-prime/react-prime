import qs from 'qs';

export const fetcher = (
  path: string,
  options?: RequestInit,
  query?: any,
  json?: boolean,
): Promise<any> => {
  const endpoint = 'https://endpoint.com';

  let formatAsJson = true;
  if (json === false) formatAsJson = false;

  return new Promise((resolve, reject) => {
    fetch(`${endpoint}${path}${query ? `?${qs.stringify(query)}` : ''}`, options)
      .then(async (response) => {
        if (response.ok) {
          if (response.ok) {
            // @ts-ignore
            if (response.status === 204) resolve();
            if (formatAsJson) return response.json();
            return response.text();
          }
        }

        return Promise.reject(response.json());
      })
      .then((json) => { resolve(json); })
      .catch((json) => { reject(json); });
  });
};
