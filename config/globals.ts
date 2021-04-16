const globals = (env?: ENV): Globals => {
  const appEnv = process.env.APP_ENV || env || 'development';

  return {
    'process.env': {
      NODE_ENV: JSON.stringify(env || 'development'),
      APP_ENV: JSON.stringify(appEnv),
      PORT: process.env.PORT || 3000,
    },
    __DEV__: appEnv === 'development',
    __TEST__: appEnv === 'test',
    __ACC__: appEnv === 'acceptation',
    __PROD__: appEnv === 'production',
  };
};

type ENV = 'production' | 'acceptation' | 'development' | 'test';

type Globals = {
  'process.env': {
    NODE_ENV: string;
    APP_ENV: string;
    PORT: string | number;
  };
  __DEV__: boolean;
  __TEST__: boolean;
  __ACC__: boolean;
  __PROD__: boolean;
};

export default globals;
