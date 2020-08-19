//@ts-nocheck
import 'isomorphic-fetch';

import { triggerErrorMessage } from './triggerErrorMessage';
import { handleStatusCodes } from './handleStatusCodes';

export const request = ({
  path, options, file, json, errorConfig = {},
}) => new Promise(async (resolve, reject) => {
  fetch(path, options)
    .then(async (response) => {
      if (handleStatusCodes(response.status)) return;

      if (response.ok) {
        if (file) return response.blob();
        if (json) return response.json();
        return response.text();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((error) => {
          triggerErrorMessage(errorConfig, error);
          reject(error);
        }).catch();
      } catch (error) {
        triggerErrorMessage(errorConfig, json);
        reject(json);
      }
    });
});
