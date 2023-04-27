import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define your initial state and reducer here
const initialState = { loggedIn: false };
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return { loggedIn: true };
    case 'LOGOUT':
      return { loggedIn: false };
    default:
      return state;
  }
}

// Configure Redux Persist to persist the store to localStorage
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the Redux store and persistor
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
