export const getApiEndpoint = (version = 'v1') => {
  switch (process.env.APP_ENV) {
    default:
    case 'test':
    case 'development':
    case 'acceptation':
    case 'production':
      return `${version}`;
  }
};
