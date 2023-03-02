import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Reducers Import
import modal from './Reducers/modal';

// Middlewares Import
import logger from './Middlewares/logger';
import dados from './Reducers/dados';
import data from './Reducers/dadosPuro';
//

// Middlewares
const middleware = [...getDefaultMiddleware()];

// Reducers
const reducer = combineReducers({ modal, dados, data });

// Store global
const store = configureStore({ reducer, middleware });
export default store;
