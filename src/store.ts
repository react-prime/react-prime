import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import * as appReducers from 'ducks';

// Store configuration is simplified
const store = configureStore({
  reducer: combineReducers(appReducers),
  devTools: __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ != null,
});

export default store;
