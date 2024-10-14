import { TOGGLE_THEME } from './themeActions';

// Начальное состояние
const initialState = {
  theme: 'light', // Начальная тема - светлая
};

// Редьюсер для изменения темы
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Переключаем тему
      };
    default:
      return state;
  }
};
