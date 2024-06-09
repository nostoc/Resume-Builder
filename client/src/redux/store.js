

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer.js';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
