<p align="center">
  <img src="https://github.com/react-prime/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Prime
[![Build Status](https://travis-ci.org/react-prime/react-prime.svg?branch=master)](https://travis-ci.org/react-prime/react-prime)
[![GitHub release](https://img.shields.io/github/release/react-prime/react-prime.svg)](https://github.com/react-prime/react-prime)

---

## Quick start
Use [create-react-prime](https://www.npmjs.com/package/create-react-prime) for easy install.
```
npx create-react-prime my-app
cd my-app
npm start
```

## Features
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [React Router](https://reacttraining.com/react-router/)
* [Styled-Components](https://www.styled-components.com)
* [Workbox](https://developers.google.com/web/tools/workbox/) for offline support and caching
* [Webpack](https://webpack.js.org/) for bundling
* [ESLint](http://eslint.org) to maintain a consistent code style
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start`
* Create production build: `$ npm run build`
* Start server: `$ npm run server`
* Remove build folder: `$ npm run clean`
* Run ESLint: `$ npm run lint`
* Run webpack-bundle-analyzer: `$ npm run analyzer`

## Deployment
Make sure all modules are installed:
`$ npm install`

Create a build for production, this will add a `/dist` folder to the root with all bundles.
`$ npm run build`

Run the server file to start server:
`$ npm run server`

For production we recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### Components
The components are separated in `common`, `modules` and `pages`.
- The `common` folder includes components are self-contained and can be used through the entire app
- The `modules` are bundled components which depend on each other.
- The `pages` folder contain top level pages of the application

### Queries
To manage data throughout the while application this boilerplate makes use of [React Query](https://react-query.tanstack.com/). A simple query is similar to the following code snippet:

```typescript
export const useGetItems = () => {
  return useQuery<ServerResponse, Error, ReselectedData>(
    'items', // either a string, or an array
    async () => await api.get({ path: '/users' }),
    {
      select: (response) => {
        // format or select parts of the response
        return response;
      }
    },
  );
};
```