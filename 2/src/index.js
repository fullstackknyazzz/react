import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { themeReducer } from './redux/themeReducer';
import App from './App';

// Комбинируем редьюсеры (если будет больше одного)
const rootReducer = combineReducers({
  themeReducer,
});

// Создаем store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
