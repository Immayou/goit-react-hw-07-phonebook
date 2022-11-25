import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
