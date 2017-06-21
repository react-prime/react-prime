# React Redux Boilerplate
[![Build Status](https://travis-ci.org/JBostelaar/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/JBostelaar/react-redux-boilerplate)
[![dependencies Status](https://david-dm.org/jbostelaar/react-redux-boilerplate/status.svg)](https://david-dm.org/jbostelaar/react-redux-boilerplate)
[![devDependencies Status](https://david-dm.org/jbostelaar/react-redux-boilerplate/dev-status.svg)](https://david-dm.org/jbostelaar/react-redux-boilerplate?type=dev)
[![GitHub release](https://img.shields.io/github/release/jbostelaar/react-redux-boilerplate.svg)](https://github.com/JBostelaar/react-redux-boilerplate)

---

## Getting Started
`$ git clone https://github.com/JBostelaar/react-redux-boilerplate`

`$ cd react-redux-boilerplate && npm install`

`$ npm start` (run in development mode)

## Features
* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/rackt/redux)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle async actions
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience).
* [ESLint](http://eslint.org) to maintain a consistent code style
* [PostCSS](https://github.com/postcss/postcss-loader) with [CSSnext](http://cssnext.io/) for the future of CSS
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start`
* Build client: `$ npm run build:client`
* Build server: `$ npm run build:server`
* Start server: `$ npm run server`
* Remove build folder: `$ npm run clean`
* Run ESLint: `$ npm run lint`

**Automated for production with [npm-run-all](https://github.com/mysticatea/npm-run-all).**

`$ npm run build` (runs clean, build:client, build:server from the npm scripts with NODE_ENV=production).

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

## Styling
### Local styles
This project uses local styles using the [css-loader](https://github.com/webpack-contrib/css-loader) with [react-css-modules](https://github.com/gajus/react-css-modules). The way it works is that you import your CSS stylesheet at the top of your React component.

`import styles from './App.css';`

With `styleName` you can define classes that match the ones you've imported from your CSS stylesheet.

`<div styleName="your-class"> ... </div>`

The last thing you have to do is export your component wrapped in cssModules.

`export default cssModules(App, styles);`

### Global styles
You can find the global styles in the `styles` folder. In this folder you can also specify all the variables.  

### CSSnext
The boilerplate uses [CSSnext](http://cssnext.io/), so you can use the newest CSS syntax. Some [features](http://cssnext.io/features/):
* Variables
* Calculations
* Nesting
* Autoprefixer

## Roadmap
- [ ] Serverside data fetching
- [ ] Initial set-up flow
- [ ] Serverside rendering optional
- [ ] Styled Components
- [ ] React Router v4
