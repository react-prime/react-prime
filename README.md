<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Prime
[![Build Status](https://travis-ci.org/JBostelaar/react-prime.svg?branch=master)](https://travis-ci.org/JBostelaar/react-prime)
[![dependencies Status](https://david-dm.org/jbostelaar/react-prime/status.svg)](https://david-dm.org/jbostelaar/react-prime)
[![devDependencies Status](https://david-dm.org/jbostelaar/react-prime/dev-status.svg)](https://david-dm.org/jbostelaar/react-prime?type=dev)
[![GitHub release](https://img.shields.io/github/release/jbostelaar/react-prime.svg)](https://github.com/JBostelaar/react-prime)

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
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle async actions
* [React Router](https://reacttraining.com/react-router/)
* [Styled-Components](https://www.styled-components.com)
* [Workbox](https://developers.google.com/web/tools/workbox/) for offline support and caching
* [Code splitting](https://reactjs.org/docs/code-splitting.html)
* [Babel](http://babeljs.io) for ES6 and ES7
* [Webpack](https://webpack.js.org/) for bundling
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience).
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

For production I recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

### Ducks
This boilerplate uses the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern for Redux, that means that the actionTypes, actions and reducers are bundled together in an isolated module.

### Redux DevTools
To use de Redux DevTools install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) from the chrome webstore.
