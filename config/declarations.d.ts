/* eslint-disable @typescript-eslint/no-explicit-any */
// global variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __ACC__: boolean;
declare const __TEST__: boolean;

// extend window object
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

declare interface NodeModule {
  hot: {
    accept(path?: string, callback?: () => void): void;
  };
}

// files
declare module '*.svg';
declare module '*.gif';
declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.svg?external';
