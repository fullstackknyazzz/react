import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeActions';
import './ThemeToggle.css'; // Стили для светлой и темной темы

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={handleToggle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
