import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactsAPISlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
