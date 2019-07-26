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

// We have to declare how files other than .ts(x) or .js(x) are handled by our codebase because
// Typescript does not know we are handling these files with Webpack.
declare module '*.json' {
  const value: object;
  export default value;
}

// Image files
declare module '*.svg' {
  const value: string;
  export = value;
}
declare module '*.gif' {
  const value: string;
  export = value;
}
declare module '*.jpg' {
  const value: string;
  export = value;
}
declare module '*.jpeg' {
  const value: string;
  export = value;
}
declare module '*.png' {
  const value: string;
  export = value;
}

// Image files external import
declare module '*.svg?external' {
  const value: string;
  export = value;
}
declare module '*.gif?external' {
  const value: string;
  export = value;
}
declare module '*.jpg?external' {
  const value: string;
  export = value;
}
declare module '*.jpeg?external' {
  const value: string;
  export = value;
}
declare module '*.png?external' {
  const value: string;
  export = value;
}

// Font files
declare module '*.otf' {
  const value: string;
  export = value;
}
declare module '*.ttf' {
  const value: string;
  export = value;
}
declare module '*.woff' {
  const value: string;
  export = value;
}
declare module '*.woff2' {
  const value: string;
  export = value;
}
declare module '*.eot' {
  const value: string;
  export = value;
}
