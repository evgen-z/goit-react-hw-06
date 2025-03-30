import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contacts.list',
    storage,
  }

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store)