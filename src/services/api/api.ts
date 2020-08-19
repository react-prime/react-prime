// @ts-nocheck
import compose from 'services/compose';

import { generateOptions } from './generateOptions';
import { request } from './request';

const runMiddleware = async (options, middlewares) => {
  let newOptions = { ...options };

  const updateOptions = (requestOptions) => {
    newOptions = requestOptions;
  };

  const chain = compose(...middlewares)(updateOptions);

  await chain(newOptions);

  return newOptions;
};

const setupRequest = async (middlewares, options) => (
  request(
    await runMiddleware(
      await generateOptions(options),
      middlewares,
    ),
  )
);

function ApiHelper() {
  this.middlewares = [];

  this.generateRequest = (options) => setupRequest(this.middlewares, options);

  this.applyMiddleware = (middlewareList) => {
    this.middlewares = Array.isArray(middlewareList)
      ? middlewareList
      : Object.values(middlewareList);
  };

  return {
    get: (args) => this.generateRequest({ method: 'GET', ...args }),
    del: (args) => this.generateRequest({ method: 'DELETE', ...args }),
    post: (args) => this.generateRequest({ method: 'POST', ...args }),
    put: (args) => this.generateRequest({ method: 'PUT', ...args }),
    patch: (args) => this.generateRequest({ method: 'PATCH', ...args }),
  };
};

export default ApiHelper;
