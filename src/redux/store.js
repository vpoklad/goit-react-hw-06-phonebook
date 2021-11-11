import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

export const store = configureStore({ reducer: rootReducer });

// export const store = createStore(rootReducer, composeWithDevTools());
