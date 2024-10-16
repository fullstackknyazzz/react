// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Если хотите добавить кастомные middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // если нужно отключить проверки на сериализуемость
    }),
});

export const persistor = persistStore(store);
